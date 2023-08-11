const getPageCount = (limit, totalPages) => {
    return Math.ceil(totalPages / limit);
};
export default getPageCount;