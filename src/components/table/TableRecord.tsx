import React, { ReactNode } from "react";
import { useUserRecordContext } from "../../contexts/UserRecordContext";
import { findKeyByValue } from "../../utils/findingkeybyvalue";
import { FieldInput } from "./FieldFormElements";
import { User } from "../../hooks/useFetchData";

type RecordProps = {
    fields: Array<string | ReactNode>;
    actions?: Array<ReactNode>;
    numberOfColumns: number;
}

function TableRecord({ fields, actions, numberOfColumns }: RecordProps) {


    // dynamic (lol static) classes for columns
    const recordStyleVariant: { [key: number]: string } = {
        4: ` grid grid-cols-4  hover:bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`,
        5: ` grid grid-cols-5  hover:bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`,
        6: ` grid grid-cols-6  hover:bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`,
        7: ` grid grid-cols-7  hover:bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`,
    }


    // dealing with reactnode maniac
    const isString = (node: ReactNode): node is string => typeof node === 'string'

    const { isEditingOn, currentData, setEditedData } = useUserRecordContext()
    if (!isEditingOn) {

        return (
            <div
                className={recordStyleVariant[numberOfColumns]}>
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
                className={` grid grid-cols-${numberOfColumns} bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`}>

                {fields.map((field, index) => {

                    // and the field is a checkbox

                    if (isString(field)) {

                        const key = findKeyByValue(currentData, field)
                        const newObj: User = { ...currentData }
                        return <FieldInput
                            key={key}
                            value={field}
                            onBlur={(e) => {
                                if (key === null) return
                                newObj[key] = e.target.value
                                setEditedData(newObj)
                            }} />
                    }
                    else if (React.isValidElement(field)) {
                        return (<div
                            key={index}
                            className="pl-[10px] py-[10px] whitespace-nowrap truncate">{field}</div>)
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