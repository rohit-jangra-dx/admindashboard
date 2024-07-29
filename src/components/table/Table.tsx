import { ReactNode } from "react";
import TableHeading from "./TableHeading";
import TableRecord from "./TableRecord";
import { User } from "../../hooks/useFetchData";
import { MdCheckBoxOutlineBlank, MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";


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

    return <div
    className={`w-full grid grid-cols-${columnCount}`}>
        <TableHeading 
        headings={tableHeading}
        />
        {
            tableData.map(record =>  {
                const dataToPass = [<MdCheckBoxOutlineBlank opacity={'.4'} fontSize={'1.5rem'}/>,record.name,record.email,record.role]
                return <TableRecord key={record.id} fields={dataToPass} actions={[<MdDeleteOutline fontSize={'1.5rem'}/>, <MdOutlineModeEdit fontSize={'1.5rem'}/>]}/>
            })
        }
    </div>

}

export default Table