import { ReactNode } from "react"
import Table from "./components/table/Table"
import { useUserDataContext } from "./contexts/UserDataContext"
import {type User } from "./hooks/useFetchData"

// icons needed to render air
import {MdCheckBoxOutlineBlank} from 'react-icons/md'

// api endpoint

function App() {
  const {data, status, error} = useUserDataContext()

  const userObject = Object.create(null) as User

  console.log(Object.keys(userObject))


  // this should have been dynamic but i am making it static to save some time.
  const tableHeadings = [
    <MdCheckBoxOutlineBlank fontSize={'1.5rem'}/>,
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
