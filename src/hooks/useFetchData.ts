import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
type UseFetchDataArgs = {
    url: string;
}

export type User = {
    id: string;
    name: string;
    email: string;
    role: string;
}

type UseFetchDataReturnType = {
    data ?: User[];
    error ?: string | null;
    loading ?: boolean;
}

function useFetchData({url}:UseFetchDataArgs): UseFetchDataReturnType{

    const [data, setData] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(()=>{
        const fetchdata = async () => {
            setLoading(true)
            try{
              const response: AxiosResponse<User[]> = await axios.get<User[]>(url);
              if (response.data) {
                setData(response.data)
              }
            }
            catch(e){
                if(axios.isAxiosError(e)){
                    setError(e.message)
                }else{
                    setError("Unexpected things happened!")
                }
            }
            finally{
              setLoading(false)
            }
          }
        fetchdata();
    
    },[url])

    
      return {data, loading, error}

}

export { useFetchData };