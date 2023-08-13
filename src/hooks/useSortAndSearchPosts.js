import { useMemo } from "react";

import useSortPosts from "./useSortPosts";

const useSortAndSearchPosts = (posts, sort, query) => {
   const sortedPosts = useSortPosts(posts, sort);

   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter((post) =>
         post.title.toLowerCase().includes(query.toLowerCase())
      );
   }, [sortedPosts, query]);

   return sortedAndSearchedPosts;
};

export default useSortAndSearchPosts;
