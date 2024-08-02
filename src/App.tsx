import { ReactNode } from "react"
import Table from "./components/table/Table"
import { useUserDataContext } from "./contexts/UserDataContext"

// icons needed to render air
import { FieldCheckbox } from "./components/table/FieldFormElements"

// api endpoint

function App() {
  const { isAllSelected,selectedUsers,actions:{toggleAll,deleteX}, data, status, error} = useUserDataContext()

  

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
      currentView = <div>...Loading</div>
      break;
    case 'error':
      currentView = <div>{error}</div>
      break;
    case 'success':{
      const welpdata = data !== undefined ? data : []
      currentView =     <div className=" w-full p-2 bg-white">
      <Table tableHeading={tableHeadings} tableData={welpdata}/>
    </div>
    }
      break;
    default:
      throw new Error("Unexpected state has occured during fetching data!")  
  }

  return <div>{
    currentView
  }
  </div>
}

export default App
