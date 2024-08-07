import { PaginationBar } from "@/components/pagination/PaginationBar";
import { SearchBar } from "@/components/searchbar/SearchBar";
import Table from "@/components/table/Table";
import { User } from "@/hooks/useFetchData";

// for accessing table headings
import { config } from "@/app.config";
import { useUserDataContext } from "@/contexts/UserDataContext";

export type AdminDashBoardPageProps = {
    maximumNumberofPages: number;
    tableData: User[];
    status: 'loading' | 'error' | 'success';
    error?: string | null | undefined;

}

export default function AdminDashBoardPage({maximumNumberofPages,tableData,status,error}:AdminDashBoardPageProps){
    const {tableHeadings} = config

    switch(status){
        case 'error':
            return <div className=" bg-focus text-center text-negative py-[2rem]">{error}</div>
        case 'loading':
            return <div className=" bg-active text-center text-secondary py-[2rem]">Loading...</div>
        case 'success':
            return <div className="px-[5px] sm:px-[10px] flex flex-col items-center justify-start gap-[.5rem]">
                <SearchBar/>
                <Table tableHeading={tableHeadings} tableData={tableData}/>
     
                <div className="w-full mt-[25px] flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2">
                <DeleteAllSelectedButton/>
                <PaginationBar maximumCountOfPages={maximumNumberofPages}/>
                
                </div>
            </div>
    }
}

export function DeleteAllSelectedButton(){
    const {isAllSelected, selectedUsers,actions:{deleteX}} = useUserDataContext()
   
    //only when more than one elements are selected only then show this one
    if (isAllSelected || Object.values(selectedUsers).filter(value => value).length > 1){
        return (
        <button
        className="rounded-xl px-[15px] py-[10px] text-[16px] text-focus bg-negative hover:bg-negativeLight"
        onClick={() => {
           const toBeDeletedIds = Object.keys(selectedUsers).filter(id => selectedUsers[id] === true)
          deleteX(...toBeDeletedIds)
        }
        }> Delete Selected</button>
        )
    }
    return 
}