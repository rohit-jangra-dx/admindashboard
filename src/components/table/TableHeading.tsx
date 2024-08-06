import { ReactNode } from "react";

type TableHeadingProps = {
    headings: Array<string | ReactNode>;
    numberOfColumns: number;
}
function TableHeading({headings,numberOfColumns}:TableHeadingProps) {
  return (
    <div
    className={`bg-active text-focus rounded-xl grid grid-cols-${numberOfColumns}`}>
        {headings.map((heading,index)=> <div
        key={index}
        className="pl-[10px] py-[10px] font-bold flex justify-start items-center">{heading}</div>)}
    </div>
  )
}

export default TableHeading