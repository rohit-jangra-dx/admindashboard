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
                    className="save text-active"
                    onClick={() => {
                        setIsEditingOn(!isEditingOn)
                        updateData()
                    }
                    }>

                    <MdDone />
                </button>
                <button
                    className="cancel text-negativeLight"
                    onClick={() => setIsEditingOn(!isEditingOn)}
                >
                    <MdClose />
                </button>
            </div>
        )

    }
    else return (
        <button
            className="edit text-secondary" onClick={() => setIsEditingOn(!isEditingOn)}>
            <MdOutlineModeEdit fontSize={'1.5rem'} />
        </button>

    )
}
