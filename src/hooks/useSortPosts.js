import { useMemo } from "react";

const useSortPosts = (posts, sort) => {
    
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => {
                return a[sort].localeCompare(b[sort])
            });
        } return posts;
    }, [sort, posts]);
    return sortedPosts;
}
export default useSortPosts;