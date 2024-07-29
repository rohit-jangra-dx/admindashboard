import { ReactNode } from "react";

type TableHeadingProps = {
    headings: Array<string | ReactNode>;
}
function TableHeading({headings}:TableHeadingProps) {
  return (
    <>
        {headings.map((heading,index)=> <div
        key={index}
        className=" bg-[#f9fafc] pl-[10px] py-[10px] font-bold text-[#626e7f]">{heading}</div>)}
    </>
  )
}

export default TableHeading