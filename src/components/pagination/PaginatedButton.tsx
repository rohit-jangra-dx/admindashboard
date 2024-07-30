import { ReactNode } from "react";
import { usePaginationContext } from "./PaginationContext";

type PaginatedButtonProps ={
    label: string | ReactNode;
    value: number

}

function PaginatedButton({label, value}:PaginatedButtonProps) {

    const {updateCurrentValue} = usePaginationContext()
  return (
    <button
    onClick={()=>updateCurrentValue(value)}
    >
        {label}
    </button>
  )
}

export default PaginatedButton