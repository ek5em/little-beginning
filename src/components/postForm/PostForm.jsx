import { useState } from "react";

import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const PostForm = ({ createPost }) => {

    const [post, setPost] = useState({ language: '', rate: '' })

    const addNewPost = (event) => {
        event.preventDefault();
        createPost({ id: Date.now(), ...post })
        setPost({ language: '', rate: '' });
    }

    return (
        <form>
            <MyInput
                type="text"
                placeholder='language'
                value={post.language}
                onChange={(event) => setPost({ ...post, language: event.target.value })}
            />
            <MyInput
                type="text"
                placeholder='rate'
                value={post.rate}
                onChange={(event) => setPost({ ...post, rate: event.target.value })}
            />
            <MyButton
                onClick={addNewPost}>
                Новый пост
            </MyButton>
        </form>
    )
}
export default PostForm;