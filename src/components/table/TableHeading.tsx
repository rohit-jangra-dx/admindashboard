import { FieldCheckbox } from "./FieldFormElements"
import { useUserDataContext } from "@/contexts/UserDataContext"

type TableHeadingProps = {
    headings: Array<string>;
    numberOfColumns: number;
}
function TableHeading({headings,numberOfColumns}:TableHeadingProps) {
  
  // needed for select all checkbox
  const {isAllSelected, actions:{toggleAll}} = useUserDataContext()
  
  return (
    <div
    className={`bg-active text-focus rounded-xl grid grid-cols-${numberOfColumns}`}>
        {headings.map((heading,index)=> <div
        key={index}
        className="pl-[10px] py-[10px] font-bold flex justify-start items-center">{
          heading === 'Select All' ?
          <FieldCheckbox isSelected={isAllSelected} onChange={()=> toggleAll()}/>
          :heading
          
          }</div>)}
    </div>
  )
}

export default TableHeading