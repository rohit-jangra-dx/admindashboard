import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useFetchData, User } from "../hooks/useFetchData"

interface Actions {
    deleteX: (...ids: string[]) => void;
    editX: (id: string, newData: User) => void;
    toggleSelection: (...ids: string[]) => void;
    toggleAll: () => void;
}
type UserDataContextType = {
    data: Array<User> | undefined;
    actions: Actions;
    status: 'success' | 'loading' | 'error';
    error?: string | null | undefined;
    selectedUsers: Record<string, boolean>;
    isAllSelected: boolean;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined)

// 
const url = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'

export function UserDataContextProvider({ children }: { children: ReactNode }) {

    const { loading, error, data: userData } = useFetchData({ url })
    const [data, setData] = useState<Array<User> | undefined>(undefined)
    const [selectedUsers, setSelectedUsers] = useState<Record<string, boolean>>({});

    const isAllSelected = data ? data.every( user => selectedUsers[user.id]) : false;
    
    useEffect(() => {
        if (loading === false) setData(userData)
    }, [userData, loading])


    // actions that can be done on data
    const deleteX = useCallback((...ids: string[]) => {
        data !== undefined &&
        setData(prev =>{
            if(prev !== undefined) {

                let newState = [...prev]
                newState = newState.filter(record => !ids.includes(record.id))
                return newState
            }
            return prev
        })
    },[data])

    const editX = useCallback((id: string, newData: User) => {
        if (data !== undefined) {

            const newDataArray = data.map(item => item.id === id ? newData : item)
            setData(newDataArray)
        }
    },[data])

    const toggleSelection = useCallback((...ids: string[]) =>{
        
        setSelectedUsers(prev => {
            
            const next = {...prev};
            ids.forEach(id => {
                next[id] = !prev[id];
            })
            return next;
        })
    },[])

    const toggleAll = useCallback(() =>{
         if ( data) {
            setSelectedUsers(prev => {
                const next = {...prev};
                const newValue = !isAllSelected
                data.forEach(user => {
                    next[user.id] = newValue
                })
                return next;
            })
         }
    },[data, isAllSelected])

    const actions: Actions = useMemo(() => ({
        deleteX,
        editX,
        toggleSelection,
        toggleAll
    }),[deleteX,editX,toggleSelection, toggleAll]) 

    return <UserDataContext.Provider value={
        {
            data,
            actions,
            status: loading ? 'loading' : error ? 'error' : 'success',
            error,
            selectedUsers, 
            isAllSelected
            }
        }>
        {children}
    </UserDataContext.Provider>
}


// eslint-disable-next-line react-refresh/only-export-components
export function useUserDataContext(): UserDataContextType {
    const context = useContext(UserDataContext)
    if (context === undefined) throw new Error("Wrap the component with UserDataContextProvider before using this hook")
    return context
}

