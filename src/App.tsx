import { ReactNode } from "react"
import Table from "./components/table/Table"
import { useUserDataContext } from "./contexts/UserDataContext"

// icons needed to render air
import { FieldCheckbox } from "@/components/table/FieldFormElements"
import { SearchBar } from "@/components/searchbar/SearchBar"
import { usePaginationContext } from "@/contexts/PaginationContext"
import { config } from "./app.config"
import { PaginationBar } from "./components/pagination/PaginationBar"
// api endpoint

function App() {
  const { isAllSelected,queryData,selectedUsers,actions:{toggleAll,deleteX}, data, status, error} = useUserDataContext()
  
  // for pagination purposes
  const {currentPage} = usePaginationContext()
  const  {pageCapacity} = config
  const startIndexOfPage = (currentPage - 1) * pageCapacity
  const lastIndexOfPage = pageCapacity * currentPage

  // this should have been dynamic but i am making it static to save some time.
  const tableHeadings = [
    <FieldCheckbox isSelected={isAllSelected} onChange={()=> toggleAll()}/>,
    "Name",
    "Email",
    "Role",
    isAllSelected || Object.values(selectedUsers).filter(value => value).length > 1 ? 
    <button
     className=" border-2 border-red-400 w-full h-full rounded-xl py-2 text-[16px] font-normal text-white hover:text-red-400 bg-red-400 hover:bg-white"
     onClick={() => {
        const toBeDeletedIds = Object.keys(selectedUsers).filter(id => selectedUsers[id] === true)
       deleteX(...toBeDeletedIds)
     }
     }>
    Delete Selected 
    </button> 
    : "Actions"
  ]

  let currentView :ReactNode

  switch(status){
    case 'loading':
      currentView = <div className=" bg-blue-100 text-center text-blue-600 py-[2rem]">Loading...</div>
      break;
    case 'error':
      currentView = <div className=" bg-red-100 text-center text-red-600 py-[2rem]">{error} !</div>
      break;
    case 'success':{
      const userData = queryData ? queryData : data !== undefined ? data : []
      currentView =     <div className=" w-full p-2 bg-white">
      <SearchBar/>
      <Table tableHeading={tableHeadings} tableData={userData.filter((_,index) => index >= startIndexOfPage && index < lastIndexOfPage)}/>
      <PaginationBar maximumCountOfPages={Math.ceil(userData.length / pageCapacity)}/>
    </div>
    }
      break;
    default:
      throw new Error("Unexpected state has occured during fetching data!")  
  }

  return <div>{currentView}
  </div>

}

export default App
