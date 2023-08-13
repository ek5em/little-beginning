import { useState } from "react";

import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const PostForm = ({ createPost }) => {
   const [post, setPost] = useState({ title: "", body: "" });

   const addNewPost = (event) => {
      event.preventDefault();
      createPost({ id: Date.now(), ...post });
      setPost({ title: "", body: "" });
   };

   return (
      <form>
         <MyInput
            type="text"
            placeholder="title"
            value={post.title}
            onChange={(event) =>
               setPost({ ...post, title: event.target.value })
            }
         />
         <MyInput
            type="text"
            placeholder="text"
            value={post.body}
            onChange={(event) => setPost({ ...post, body: event.target.value })}
         />
         <MyButton onClick={addNewPost}>Новый пост</MyButton>
      </form>
   );
};
export default PostForm;
