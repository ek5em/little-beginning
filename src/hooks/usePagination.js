import { useMemo } from "react"
const usePagination = (totalCount) => {
    const pagesArray = useMemo(() => {
        const arr = [];
        for (let i = 0; i < totalCount; i++) {
            arr.push(i + 1);
        }
        return arr;
    }, [totalCount]);
    return pagesArray;
}

export default usePagination;