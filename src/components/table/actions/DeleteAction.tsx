import { MdDeleteOutline } from "react-icons/md";
import { useUserDataContext } from "@/contexts/UserDataContext";

type DeleteActionProps = {
    toDelete: string[];
}
export default function DeleteAction({toDelete}:DeleteActionProps){
    const {actions:{deleteX}} = useUserDataContext()


    return (
    <button
    className="delete text-negative hover:text-negativeLight"
    onClick={()=> deleteX(...toDelete)}>
    <MdDeleteOutline
    fontSize={'1.5rem'}/>
        </button>
    )

}