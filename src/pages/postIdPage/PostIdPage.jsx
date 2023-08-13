import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import IsLoadingChecker from "../../components/UI/isLoadingChecker/IsLoadingChecker";
import useFetch from "../../hooks/useFetch";
import PostService from "../../API/PostService";
import cl from "./PostIdPage.module.css";

const PostIdPage = () => {
   const params = useParams();
   const [post, setPost] = useState({});
   const [comments, setComments] = useState([]);

   const [fetchPostById, isPostLoading, postError] = useFetch(async (id) => {
      const response = await PostService.getById(id);
      setPost(response.data);
   });
   const [fetchComById, isComLoading, comError] = useFetch(async (id) => {
      const response = await PostService.getCommentsById(id);
      setComments(response.data);
   });

   useEffect(() => {
      fetchPostById(params.id);
      fetchComById(params.id);
   }, []);

   return (
      <div>
         <div className={cl.wrapper}>
            <h3>Вы открыли пост с ID = {params.id}</h3>
            <div className={cl.post}>
               <IsLoadingChecker error={postError} isLoading={isPostLoading}>
                  <div>
                     <p className={cl.title}>
                        {post.id}. {post.title}
                     </p>
                     <p className={cl.body}>{post.body}</p>
                  </div>
               </IsLoadingChecker>
            </div>
            <IsLoadingChecker error={comError} isLoading={isComLoading}>
               <Comments comments={comments} />
            </IsLoadingChecker>
         </div>
      </div>
   );
};
export default PostIdPage;
