import { ReactNode } from "react";
import TableHeading from "./TableHeading";
import TableRecord from "./TableRecord";
import { User } from "../../hooks/useFetchData";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { UserRecordContextProvider } from "../../contexts/UserRecordContext";
import DeleteAction from "./actions/DeleteAction";
import EditAction from "./actions/EditAction";


type TableProps = {
    tableHeading: Array<string | ReactNode>;
    tableData: Array<User>;
    recordActions?: Array<ReactNode>
}

function Table({
    tableHeading,
    tableData,
    recordActions
}:TableProps){

    console.log(tableData,recordActions)

    const columnCount = tableHeading.length
    console.log(columnCount)
    return <div
    className={`w-full grid grid-cols-1`}>
        <TableHeading 
        headings={tableHeading}
        numberOfColumns={columnCount}
        />
        {
            tableData.map(record =>  {
                const dataToPass = [<MdCheckBoxOutlineBlank opacity={'.4'} fontSize={'1.5rem'}/>,record.name,record.email,record.role]
                return <UserRecordContextProvider fieldData={record}>
                        <TableRecord 
                        key={record.id} fields={dataToPass} 
                        numberOfColumns={columnCount} 
                        actions={[
                            <EditAction/>,
                            <DeleteAction toDelete={record.id}/>
                             ]}
                             />
                </UserRecordContextProvider> 
            })
        }
    </div>

}

export default Table