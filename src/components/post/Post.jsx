import MyButton from '../UI/button/MyButton';
import './Post.css';

const Post = ({ name, rate, number, remove, id }) => {
    return (
        <div className='post'>
            <div className='post-name'>
                <h2>{number}. {name}</h2>
                <p>{name} - язык программирования</p>
                <span>Оценка: {rate}</span>
            </div>
            <div>
                <MyButton onClick={() => { remove(id) }}>Удоли</MyButton>
            </div>
        </div>
    )
}

export default Post;