import { createContext, ReactNode, useContext, useState } from "react";

type PaginationContextType = {
    currentPage: number;
    updateCurrentPage: (value: number) => void
}

const PaginationContext = createContext<PaginationContextType | undefined>(undefined)

export function PaginationContextProvider({children}:{children: ReactNode}){
    const [currentPage, setcurrentPage] = useState<number>(1)
    
    const updateCurrentPage =(value:number) => setcurrentPage(prev => {
        if (value !== prev) return value
        return prev

    })

    return <PaginationContext.Provider value={{currentPage, updateCurrentPage}}>
        {children}
    </PaginationContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePaginationContext = (): PaginationContextType => {
   
    const context = useContext(PaginationContext)
    if (context === undefined) throw new Error("useContext is used without wrapping the PaginationContextProvider over the component!")
    return context
    }