import { TransitionGroup, CSSTransition } from "react-transition-group";
import Post from "../post/Post";

import './PostList.css'

const PostList = ({ posts, remove }) => {
    return (
        <div>
            <h3 style={{ 'textAlign': 'center' }}>Список 1</h3>
            <div style={{
                'alignItems': 'center',
                'display': 'flex',
                'flexDirection': 'column',
            }}>
                <TransitionGroup>
                    {posts.map((post, index) => {
                        const { id, language: name, rate } = post;
                        return (
                            <CSSTransition
                                key={id}
                                timeout={500}
                                classNames="post"
                            >
                                <Post
                                    remove={remove}
                                    id={id}
                                    key={id}
                                    name={name}
                                    rate={rate}
                                    number={index + 1}
                                />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </div>
        </div>
    )
}

export default PostList;