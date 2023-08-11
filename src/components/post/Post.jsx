import MyButton from '../UI/button/MyButton';
import './Post.css';

const Post = ({ title, body, userId, remove, id }) => {
    return (
        <div className='post'>
            <div className='post-name'>
                <h2>{id}. {title}</h2>
                <p>{body}</p>
                <span>userId: {userId}</span>
            </div>
            <div className='post__btns'>
                <MyButton
                    onClick={() => { /* пушим на страничку, пока хызы как */}}
                >
                    Открыть
                </MyButton>
                <MyButton
                    onClick={() => { remove(id) }}
                >
                    Удоли
                </MyButton>
            </div>
        </div>
    )
}

export default Post;