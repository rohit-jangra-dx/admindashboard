import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../hooks/useFetchData"

type UserRecordContextType = {
    currentData: User;
    editedData: User | null;
    isEditingOn: boolean;
    setEditedData: (x: User | null) => void;
    setIsEditingOn: (x:boolean) => void
}

type UserRecordContextProviderProps = {
    fieldData: User;
    children: ReactNode;
}

const UserRecordContext = createContext<UserRecordContextType | undefined>( undefined)



export function UserRecordContextProvider({fieldData,children}:UserRecordContextProviderProps){

    
    const [currentData] = useState<User>(fieldData)
    const [editedData, setEditedData] = useState<User | null>(null)
    const [isEditingOn,setIsEditingOn] = useState<boolean>(false)


    return <UserRecordContext.Provider value={{currentData, editedData, setEditedData, isEditingOn, setIsEditingOn}}>
        {children}
    </UserRecordContext.Provider>

}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserRecordContext = (): UserRecordContextType =>{
    
    const context = useContext(UserRecordContext)

    if(context === undefined) throw new Error("wrap the component with context provider before using the context!")

    return context;
}

