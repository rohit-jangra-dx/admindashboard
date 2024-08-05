import { ReactNode } from "react";
import TableHeading from "./TableHeading";
import TableRecord from "./TableRecord";
import { User } from "../../hooks/useFetchData";
import { UserRecordContextProvider } from "../../contexts/UserRecordContext";
import DeleteAction from "./actions/DeleteAction";
import EditAction from "./actions/EditAction";
import { FieldCheckbox } from "./FieldFormElements";
import { useUserDataContext } from "../../contexts/UserDataContext";


type TableProps = {
    tableHeading: Array<string | ReactNode>;
    tableData: Array<User>;
}

function Table({
    tableHeading,
    tableData,
}:TableProps){

    const {selectedUsers,actions:{toggleSelection}}= useUserDataContext()
    const columnCount = tableHeading.length

    return <div
    className={`w-full grid grid-cols-1`}>
        <TableHeading 
        headings={tableHeading}
        numberOfColumns={columnCount}
        />
        {
            tableData.map(record =>  {
// checking toggle state
                const isSelected = selectedUsers[record.id] || false
                const dataToPass = [<FieldCheckbox isSelected={isSelected} onChange={()=>toggleSelection(record.id)}/>,record.name,record.email,record.role]
                
                return <UserRecordContextProvider fieldData={record}>
                        <TableRecord 
                        isSelected={isSelected}
                        key={record.id} fields={dataToPass} 
                        numberOfColumns={columnCount} 
                        actions={
//only delete action will be there if it's selected
                            isSelected ?
                            [
                                <DeleteAction toDelete={[record.id]}/>
                            ]:
                            [
                            <EditAction/>,
                            <DeleteAction toDelete={[record.id]}/>
                             ]}
                             />
                </UserRecordContextProvider> 
            })
        }
    </div>

}

export default Table