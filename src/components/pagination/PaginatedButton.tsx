import React, { ReactNode } from "react";
import { usePaginationContext } from "@/contexts/PaginationContext";

type PaginatedButtonProps = {
  label: string | ReactNode;
  value: number | null
}

function PaginatedButton({ label, value }: PaginatedButtonProps) {

  const { currentPage, updateCurrentPage } = usePaginationContext()

  // repeating the code : can differentiate between react node and string
  
  if (currentPage === value && !React.isValidElement(label) ) {
    return <button
      className=" bg-active text-focus font-bold flex justify-center items-center rounded-full w-[50px] h-[50px]"
      onClick={() => value !== null && updateCurrentPage(value)}
    >
      {label}
    </button>
  }
  return (
    <button
    className=" text-xl hover:bg-focus text-secondary flex justify-center items-center w-[50px] h-[50px] rounded-full"
      onClick={() => value !== null && updateCurrentPage(value)}
    >
      {label}
    </button>
  )
}

export default PaginatedButton