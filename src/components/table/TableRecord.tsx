import { ReactNode } from "react";

type RecordProps = {
    fields: Array<string | ReactNode>;
    actions?: Array<ReactNode>;
    numberOfColumns: number;
}

function TableRecord({ fields, actions,numberOfColumns }: RecordProps) {

    return (
        <div
        className={` grid grid-cols-${numberOfColumns} hover:bg-[#F9FAFC]`}>
            {fields.map((field,index) => <div
             key={index}
             className="pl-[10px] py-[10px] whitespace-nowrap truncate">{field}</div>)}
            {actions &&

                <div
                    className=" flex justify-start items-center gap-[25px]">
                    {actions.map((action: ReactNode) => action)}
                </div>
            }
        </div>
    )
}

export default TableRecord