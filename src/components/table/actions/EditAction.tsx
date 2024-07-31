import { useUserRecordContext } from "../../../contexts/UserRecordContext";

import { MdOutlineModeEdit, MdDone, MdClose } from "react-icons/md";

export default function EditAction(){
    const {editedData, setIsEditingOn, isEditingOn} = useUserRecordContext()

    console.log(editedData,isEditingOn)

    if (isEditingOn){
        return (
            <div
            className=" flex justify-center items-center gap-5 text-3xl">
                <MdDone
                 className=" text-green-400"
                 onClick={()=> setIsEditingOn(!isEditingOn)}/>
                <MdClose onClick={()=> setIsEditingOn(!isEditingOn)}/>
            </div>
        )
    
    }     
    else return (
        <MdOutlineModeEdit fontSize={'1.5rem'} onClick={() => setIsEditingOn(!isEditingOn)}/>
    )
}
