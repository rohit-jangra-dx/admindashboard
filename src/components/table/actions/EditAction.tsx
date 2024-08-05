import { useUserDataContext } from "../../../contexts/UserDataContext";
import { useUserRecordContext } from "../../../contexts/UserRecordContext";

import { MdOutlineModeEdit, MdDone, MdClose } from "react-icons/md";

export default function EditAction() {
    const { editedData, setIsEditingOn, isEditingOn } = useUserRecordContext()
    const { actions: { editX } } = useUserDataContext()

    const updateData = () => {

        if (!editedData?.id) return
        const id = editedData.id
        editX(id, editedData)
    }

    if (isEditingOn) {
        return (
            <div
                className=" flex justify-center items-center gap-5 text-3xl">
                <button
                    className="save"
                    onClick={() => {
                        setIsEditingOn(!isEditingOn)
                        updateData()
                    }
                    }>

                    <MdDone className=" text-green-400" />
                </button>
                <button
                    className="cancel"
                    onClick={() => setIsEditingOn(!isEditingOn)}
                >
                    <MdClose />
                </button>
            </div>
        )

    }
    else return (
        <button
            className="edit" onClick={() => setIsEditingOn(!isEditingOn)}>
            <MdOutlineModeEdit fontSize={'1.5rem'} />
        </button>

    )
}
