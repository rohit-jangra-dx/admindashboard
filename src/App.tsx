import { ReactNode } from "react"
import Table from "./components/table/Table"
import { useUserDataContext } from "./contexts/UserDataContext"

// icons needed to render air
import { FieldCheckbox } from "./components/table/FieldFormElements"

// api endpoint

function App() {
  const { isAllSelected,actions:{toggleAll}, data, status, error} = useUserDataContext()


  // this should have been dynamic but i am making it static to save some time.
  const tableHeadings = [
    <FieldCheckbox isSelected={isAllSelected} onChange={()=> toggleAll()}/>,
    "Name",
    "Email",
    "Role",
    "Actions"
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
