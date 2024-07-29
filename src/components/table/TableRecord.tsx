import { ReactNode } from "react";

type RecordProps = {
    fields: Array<string | ReactNode>;
    actions?: Array<ReactNode>
}

function TableRecord({ fields, actions }: RecordProps) {

    return (
        <>
            {fields.map((field,index) => <div
             key={index}
             className=" pl-[10px] py-[10px] whitespace-nowrap truncate">{field}</div>)}
            {actions &&

                <div
                    className=" flex justify-start items-center gap-1.5">
                    {actions.map((action: ReactNode) => action)}
                </div>
            }
        </>
    )
}

export default TableRecord