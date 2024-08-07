import { useUserDataContext } from "./contexts/UserDataContext"

import { usePaginationContext } from "@/contexts/PaginationContext"
import { config } from "./app.config"

import AdminDashBoardPage, { AdminDashBoardPageProps } from "./pages/AdminDashBoardPage"
import { useMemo } from "react"


function App() {
  const { data, status, error } = useUserDataContext()

  // for pagination purposes
  const { currentPage } = usePaginationContext()
  const { pageCapacity } = config
  const startIndexOfPage = (currentPage - 1) * pageCapacity
  const lastIndexOfPage = pageCapacity * currentPage

  // data needed to render the adminDashBoard
  const adminDashBoardPageProps: AdminDashBoardPageProps = useMemo(() => {
    return {
      // the paginated data
      tableData: data ? data.filter((_, index) => index >= startIndexOfPage && index < lastIndexOfPage) : [],
      maximumNumberofPages: Math.ceil(((data?.length ?? 0) / pageCapacity)),
      status: status,
      error: error
    }
  },[data,status,error, lastIndexOfPage,startIndexOfPage,pageCapacity])

  return <AdminDashBoardPage {...adminDashBoardPageProps} />
}

export default App
