import { User } from "../hooks/useFetchData"

export const autoSearch = (value: string,dataMap:Map<string,User[]>): User[] | undefined => {
    
    // this one return non duplicate results that we need
    let uniqueResults
    
    if(value.trim() !== ''){
        const results = Array.from(dataMap.entries())
            .filter(([key])=> key.includes(value.toLowerCase()))
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .flatMap(([_,value]) => value)
        
            // removing duplicates
             uniqueResults = Array.from(new Set(results.map(user => user.id)))
                .map(id => results.find(user => user.id === id))
                .filter((user): user is User => user !== undefined)
        }


    return uniqueResults
}