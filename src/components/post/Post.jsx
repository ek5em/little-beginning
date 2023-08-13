import MyButton from "../UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ title, body, userId, remove, id }) => {
   const router = useNavigate();
   return (
      <div className="post">
         <div className="post-name">
            <h2>
               {id}. {title}
            </h2>
            <p>{body}</p>
            <span>userId: {userId}</span>
         </div>
         <div className="post__btns">
            <MyButton
               onClick={() => {
                  router(`/posts/${id}`);
               }}
            >
               Открыть
            </MyButton>
            <MyButton
               onClick={() => {
                  remove(id);
               }}
            >
               Удоли
            </MyButton>
         </div>
      </div>
   );
};

export default Post;
