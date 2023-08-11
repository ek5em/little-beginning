import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PostService from "../../API/PostService";
import { useState } from "react";
import Loader from "../../components/UI/loader/Loader";

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
    }, [])

    return (
        <div>
            <h3>Вы открыли пост с ID = {params.id}</h3>
            {postError ?
                <h2>Произошла ошибка {postError}</h2> :
                isPostLoading ?
                    <Loader /> :
                    <div>{post.id}. {post.title}</div>
            }


        </div>
    )
}
export default PostIdPage;