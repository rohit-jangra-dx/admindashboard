import { MdOutlineSearch } from "react-icons/md"


export function SearchBar(){
    return (
        <div
        className=" relative bg-slate-400 flex items-center px-[.5rem] py-[1rem]">
            <MdOutlineSearch 
            className=" absolute right-0 mr-4"
            fontSize={'1.5rem'}/>
            <input
            className=" flex-1 p-[.5rem] px-4 rounded-lg border-none focus-visible:outline-none"
            placeholder="Search by Name, Email or Role"
            />
        </div>
    )
}