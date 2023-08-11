import usePagination from "../../../hooks/usePagination";

import MyButton from "../button/MyButton";
const Pagination = ({ totalPages, currentPage, setPage }) => {
    const pagesArray = usePagination(totalPages);
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p => {
                return <MyButton
                    selected={p === currentPage}
                    key={p}
                    onClick={() => setPage(p)}
                >
                    {p}
                </MyButton>
            })}
        </div>
    )
}

export default Pagination;