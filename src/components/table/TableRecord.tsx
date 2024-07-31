import React, { ReactNode } from "react";
import { useUserRecordContext } from "../../contexts/UserRecordContext";

type RecordProps = {
    fields: Array<string | ReactNode>;
    actions?: Array<ReactNode>;
    numberOfColumns: number;
}

function TableRecord({ fields, actions, numberOfColumns }: RecordProps) {

    const { isEditingOn, currentData, setEditedData } = useUserRecordContext()
    if (!isEditingOn) {

        return (
            <div
                className={` grid grid-cols-${numberOfColumns} hover:bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`}>
                {fields.map((field, index) => <div
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
    // if editing is on
    else {
        return (
            <div
                className={` grid grid-cols-${numberOfColumns} hover:bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`}>

                {fields.map((field, index) => {

                    // and the field is a checkbox

                    if (React.isValidElement(field)) {
                        return (<div
                            key={index}
                            className="pl-[10px] py-[10px] whitespace-nowrap truncate">{field}</div>)
                    }
                    else{
                        return <input
                        key={index}
                        onBlur={() => setEditedData(currentData)}
                        className="pl-[10px] py-[10px] whitespace-nowrap truncate"/>
                    }
                }
                )
                }

                {actions &&

                    <div
                        className=" flex justify-start items-center gap-[25px]">
                        {actions.map((action: ReactNode) => action)}
                    </div>
                }
            </div>
        )
    }

}

export default TableRecord


// still need to deal with passing the data to edit path, and ahndler the uncontrolled input