import { ReactNode } from "react";

type TableHeadingProps = {
    headings: Array<string | ReactNode>;
    numberOfColumns: number;
}
function TableHeading({headings,numberOfColumns}:TableHeadingProps) {
  return (
    <div
    className={`grid grid-cols-${numberOfColumns}`}>
        {headings.map((heading,index)=> <div
        key={index}
        className=" bg-[#f9fafc] pl-[10px] py-[10px] font-bold text-[#626e7f] flex justify-start items-center">{heading}</div>)}
    </div>
  )
}

export default TableHeading