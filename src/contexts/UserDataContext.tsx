import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useFetchData, User } from "../hooks/useFetchData"

type Actions = {
    deleteX: (id: string) => void;
    editX: (id: string, newData: User) => void;
}
type UserDataContextType = {
    data: Array<User> | undefined;
    actions: Actions;
    status: 'success' | 'loading' | 'error';
    error?: string | null | undefined;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined)

// 
const url = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'

export function UserDataContextProvider({children}:{children: ReactNode}){
   
    const {loading,error, data:userData} = useFetchData({url})
    const [data, setData] = useState<Array<User> | undefined>(undefined)
   
    useEffect(()=>{
        if( loading === false ) setData(userData)
    },[userData,loading])

    // actions that can be done on data
    const actions =  new Object(null) as Actions

    actions.deleteX = (id: string) => {
        
        const newData = data?.filter(item => item.id != id)
        setData(newData)
    }

    actions.editX = (id: string, newData: User) => {
        if(data !== undefined){

            const newDataArray = data.map(item => item.id === id ? newData : item)
            setData(newDataArray)
        }
    }

    return <UserDataContext.Provider value={{data, actions, status: loading ? 'loading' : error ? 'error' : 'success',error}}>
        {children}
    </UserDataContext.Provider>
}


// eslint-disable-next-line react-refresh/only-export-components
export function useUserDataContext():UserDataContextType{
    const context = useContext(UserDataContext)
    if(context === undefined) throw new Error("Wrap the component with UserDataContextProvider before using this hook")
    return context
}