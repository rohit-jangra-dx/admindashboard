import Table from "./components/table/Table"
import { useFetchData,type User } from "./hooks/useFetchData"

// icons needed to render air
import {MdCheckBoxOutlineBlank} from 'react-icons/md'

// api endpoint
const url = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'

function App() {
  const {data:userData,loading,error} = useFetchData({url})
 
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

  if(loading) return <div className=" bg-blue-400">Loading...</div>
  else if(error) return <div className="bg-red-400">{error}</div>
  else if(userData) return (
    <div className=" w-full p-2 bg-white">
      <Table tableHeading={tableHeadings} tableData={userData}/>
    </div>
  )
}

export default App
