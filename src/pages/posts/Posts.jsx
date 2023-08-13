import { useState, useEffect, useRef } from "react";

import getPageCount from "../../utils/pages";
import useSortAndSearchPosts from "../../hooks/useSortAndSearchPosts";
import useFetch from "../../hooks/useFetch";

import PostService from "../../API/PostService";

import PostList from "../../components/postList/PostList";
import PostForm from "../../components/postForm/PostForm";
import PostFilter from "../../components/postFilter/PostFilter";
import MyModal from "../../components/myModal/MyModal";
import MyButton from "../../components/UI/button/MyButton";
import Pagination from "../../components/UI/pagination/Pagination";
import Loader from "../../components/UI/loader/Loader";

import "./Posts.css";
import { useObserver } from "../../hooks/useObserver";

const Posts = () => {
   const [posts, setPosts] = useState([]);
   const [filter, setFilter] = useState({ sort: "", query: "" });
   const [visible, setVisible] = useState(false);
   const [totalPages, setTotalPages] = useState(0);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);
   const lastElementRef = useRef();

   const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {
      const responce = await PostService.getAll(limit, page);
      setPosts([...posts, ...responce.data]);
      const pagesCount = getPageCount(limit, responce.headers["x-total-count"]);
      setTotalPages(pagesCount);
   });

   useObserver(lastElementRef, page < totalPages, isPostsLoading, () => {
      setPage(page + 1);
   });

   useEffect(() => {
      fetchPosts();
   }, [page]);

   const sortedAndSearchedPosts = useSortAndSearchPosts(
      posts,
      filter.sort,
      filter.query
   );

   const createPost = (postInfo) => {
      setPosts([...posts, postInfo]);
      setVisible(false);
   };

   const removePost = (id) => {
      setPosts(posts.filter((post) => id !== post.id));
   };

   const addNewPost = () => {
      setVisible(true);
   };

   return (
      <div className="posts-page">
         <MyButton onClick={addNewPost}>Добавить пост</MyButton>
         <MyModal visible={visible} setVisible={setVisible}>
            <PostForm createPost={createPost} />
         </MyModal>
         <PostFilter filter={filter} setFilter={setFilter} />
         {postError ? (
            <h2>Произошла ошибка {postError}</h2>
         ) : isPostsLoading ? (
            <Loader />
         ) : (
            <></>
         )}
         {sortedAndSearchedPosts.length ? (
            <>
               <PostList posts={sortedAndSearchedPosts} remove={removePost} />
               <Pagination
                  totalPages={totalPages}
                  currentPage={page}
                  setPage={setPage}
               />
            </>
         ) : (
            <h2>Постов нет вин приняв илслэм</h2>
         )}
         <div
            ref={lastElementRef}
            style={{ height: "30px" }}
            className="lastEl"
         ></div>
      </div>
   );
};

export default Posts;
