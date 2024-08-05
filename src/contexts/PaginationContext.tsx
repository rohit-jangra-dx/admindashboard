import { createContext, ReactNode, useContext, useState } from "react";

type PaginationContextType = {
    currentValue: number;
    updateCurrentValue: (value: number) => void
}

const PaginationContext = createContext<PaginationContextType | undefined>(undefined)

export function PaginationContextProvider({children}:{children: ReactNode}){
    const [currentValue, setCurrentValue] = useState<number>(1)
    
    const updateCurrentValue = (value:number) => setCurrentValue(value)

    return <PaginationContext.Provider value={{currentValue, updateCurrentValue}}>
        {children}
    </PaginationContext.Provider>
}

export const usePaginationContext = (): PaginationContextType => {
   
    const context = useContext(PaginationContext)
    if (context === undefined) throw new Error("useContext is used without wrapping the PaginationContextProvider over the component!")
    return context
    }