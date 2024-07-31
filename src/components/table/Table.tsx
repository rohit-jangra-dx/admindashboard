import { ReactNode } from "react";
import TableHeading from "./TableHeading";
import TableRecord from "./TableRecord";
import { User } from "../../hooks/useFetchData";
import { MdCheckBoxOutlineBlank, MdOutlineModeEdit } from "react-icons/md";
import DeleteButton from "./actions/DeleteButton";


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
                return <TableRecord numberOfColumns={columnCount} key={record.id} fields={dataToPass} actions={[<DeleteButton toDelete={record.id}/>, <MdOutlineModeEdit fontSize={'1.5rem'}/>]}/>
            })
        }
    </div>

}

export default Table