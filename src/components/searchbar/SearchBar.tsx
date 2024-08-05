import { ChangeEvent, useEffect, useMemo, useState } from "react"
import { MdOutlineSearch } from "react-icons/md"
import { useUserDataContext } from "../../contexts/UserDataContext"
import { User } from "../../hooks/useFetchData"
import { autoSearch } from "../../utils/autsearch"


export function SearchBar(){

    const [searchText, setSearchText] = useState<string>('')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchResults,setSearchResults] = useState<User[] | undefined>(undefined)
    
    const {data, setQueryData} = useUserDataContext()
    

    //setting up the query data
    useEffect(()=>{
       searchResults && setQueryData(searchResults)
    },[searchResults,setQueryData]) 

    // converting the data to map for easy search
    const dataMap = useMemo(():Map<string,Array<User>> => {
        const map = new Map<string,Array<User>>()
        data?.forEach((item) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            Object.entries(item).forEach(([_,value]) => {
                if( typeof value === 'string') {
                    const lowercaseValue = value.toLowerCase()

                    if(!map.has(lowercaseValue)){
                        map.set(lowercaseValue,[])
                    }
                    map.get(lowercaseValue)?.push(item)
                }
            })
        })

        return map
    },[data])

    // event handlers
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value
        setSearchText(value)
        
        setSearchResults(autoSearch(value,dataMap))
    } 
    const handleClick = ():void => {
        setQueryData(searchResults)
    }

    return (
        <div
        className=" relative bg-slate-400 flex items-center px-[.5rem] py-[1rem]">
            <MdOutlineSearch 
            className="search-icon absolute right-0 mr-4"
            fontSize={'1.5rem'}
            onClick={handleClick}
            />
            <input
            onKeyDown={(e) => e.key === 'Enter' && setQueryData(searchResults)}
            value={searchText}
            onChange={handleChange}
            className=" flex-1 p-[.5rem] px-4 rounded-lg border-none focus-visible:outline-none"
            placeholder="Search by Name, Email or Role"
            />
        </div>
    )
}