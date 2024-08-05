import { ReactNode } from "react";

type PaginatedButtonProps ={
    label: string | ReactNode;
    value: number

}
// todo: on clicking the button, the context value should be updated
function PaginatedButton({label, value}:PaginatedButtonProps) {
  return (
    <button
    onClick={()=>console.log(value)}
    >
        {label}
    </button>
  )
}

export default PaginatedButton