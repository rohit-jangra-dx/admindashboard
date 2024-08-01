import { useUserDataContext } from "../../../contexts/UserDataContext";
import { useUserRecordContext } from "../../../contexts/UserRecordContext";

import { MdOutlineModeEdit, MdDone, MdClose } from "react-icons/md";

export default function EditAction(){
    const {editedData,setIsEditingOn, isEditingOn} = useUserRecordContext()
    const {actions:{editX}} = useUserDataContext()
    
    const updateData = () =>{

        if(!editedData?.id) return 
        const id = editedData.id
        editX(id, editedData)
    }

    if (isEditingOn){
        return (
            <div
            className=" flex justify-center items-center gap-5 text-3xl">
                <MdDone
                 className=" text-green-400"
                 onClick={()=> {
                    setIsEditingOn(!isEditingOn)
                    updateData()
                }
                    }/>
                <MdClose onClick={()=> setIsEditingOn(!isEditingOn)}/>
            </div>
        )
    
    }     
    else return (
        <MdOutlineModeEdit fontSize={'1.5rem'} onClick={() => setIsEditingOn(!isEditingOn)}/>
    )
}
