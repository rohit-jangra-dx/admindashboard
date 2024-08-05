import React, { ReactNode } from "react";
import { useUserRecordContext } from "../../contexts/UserRecordContext";
import { findKeyByValue } from "../../utils/findingkeybyvalue";
import { FieldInput } from "./FieldFormElements";
import { User } from "../../hooks/useFetchData";

type RecordProps = {
    fields: Array<string | ReactNode>;
    actions?: Array<ReactNode>;
    numberOfColumns: number;
    isSelected?: boolean;
}

function TableRecord({ fields,isSelected ,actions, numberOfColumns }: RecordProps) {

    const variantClass = `${numberOfColumns}${isSelected ? 2 : 1}`

    // dynamic (lol static) classes for columns
    const recordStyleVariant: { [key: string]: string } = {
        '41': ` grid grid-cols-4 py-[.3rem]  hover:bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`,
        '51': ` grid grid-cols-5 py-[.3rem]  hover:bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`,
        '61': ` grid grid-cols-6 py-[.3rem]  hover:bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`,
        '71': ` grid grid-cols-7 py-[.3rem]  hover:bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`,
        '42': ` grid grid-cols-4 py-[.3rem]  bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`,
        '52': ` grid grid-cols-5 py-[.3rem]  bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`,
        '62': ` grid grid-cols-6 py-[.3rem]  bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`,
        '72': ` grid grid-cols-7 py-[.3rem]  bg-[#F9FAFC] border-b-[1px] border-[#F9FAFC]`,
    }

    // dealing with reactnode maniac
    const isString = (node: ReactNode): node is string => typeof node === 'string'

    const { isEditingOn, currentData, setEditedData } = useUserRecordContext()
    if (!isEditingOn) {

        return (
            <div
                className={recordStyleVariant[variantClass]}>
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