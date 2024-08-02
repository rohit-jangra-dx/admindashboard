import { ChangeEventHandler, FocusEventHandler, useState } from "react"

type FieldProps = {
    value: string;
    onBlur: FocusEventHandler<HTMLInputElement>;
}

export function FieldInput({value,onBlur}: FieldProps){
   
   
    const [fieldValue, setFieldValue] = useState<string>(value)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setFieldValue(e.target.value)
    }

    return (
        <input
        className=" px-3 max-w-full focus-visible:outline-none focus-visible:border-[1px] focus-visible:border-slate-800"
        value={fieldValue}
        onBlur={onBlur}
        onChange={handleChange}
        />
    )
}


type FieldCheckboxProps = {
    isSelected: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export function FieldCheckbox({isSelected, onChange}:FieldCheckboxProps){

    return (
        <input
        type="checkbox"
        checked={isSelected}
        onChange={onChange}
        />
    )
}