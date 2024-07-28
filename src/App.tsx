import { useFetchData } from "./hooks/useFetchData"

const url = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'

function App() {
  const {data:userData,loading,error} = useFetchData({url})
  
  if(loading) return <div className=" bg-blue-400">Loading...</div>
  else if(error) return <div className="bg-red-400">{error}</div>
  else if(userData) return (
    <div className=" w-full p-2 ">
    {userData.map(item => <div
     className=" w-full flex items-center justify-between bg-slate-300 my-3"
     key={item.id}>
      
      {Object.values(item).map(kid => <span>{kid}</span>)}
    </div>)}
    </div>
  )
}

export default App
