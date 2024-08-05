import { usePaginationContext } from "@/contexts/PaginationContext";
import PaginatedButton from "./PaginatedButton";

// icons
import {
    MdKeyboardDoubleArrowLeft,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdKeyboardDoubleArrowRight
} from 'react-icons/md'


type PaginationBarProps = {
    maximumCountOfPages: number;
}

export function PaginationBar({ maximumCountOfPages }: PaginationBarProps) {
    const { currentPage } = usePaginationContext()
    const pages = Array.from({ length: maximumCountOfPages }, (_, i) => i + 1)
    console.log(maximumCountOfPages)


    return (<div className=" w-full flex justify-center items-center gap-2 ">
        {/* forward and first page buttons */}
        <PaginatedButton
            label={<MdKeyboardDoubleArrowLeft />}
            value={1}
        />
        <PaginatedButton
            label={<MdKeyboardArrowLeft />}
            value={currentPage <= 1 ? null : currentPage - 1}
        />
        {/* number of pages that it will represent */}
        {pages.map(value => <PaginatedButton label={value} value={value} />)}

        {/* backward and last page butthons */}
        <PaginatedButton
            label={<MdKeyboardArrowRight/>}
            value={currentPage >= maximumCountOfPages ? null : currentPage + 1}
        />
        <PaginatedButton
            label={<MdKeyboardDoubleArrowRight />}
            value={maximumCountOfPages}
        />
    </div>
    )
}
// leaving forward and backward buttons