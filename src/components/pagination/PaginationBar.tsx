import PaginatedButton from "./PaginatedButton";

type PaginationBarProps = {
    maximumCountOfPages: number;
}

export function PaginationBar({maximumCountOfPages}:PaginationBarProps){
    const pages = Array.from({length: maximumCountOfPages},(_,i)=> i + 1)

    return (<div className=" flex justify-start items-center ">
        {/* forward and first page buttons */}

        {/* number of pages that it will represent */}
        {pages.map(value => <PaginatedButton label={value} value={value}/>)}

        {/* backward and last page butthons */}

    </div>
    )
}
// leaving forward and backward buttons