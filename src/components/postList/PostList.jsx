import Post from "../post/Post";

const PostList = ({ posts, remove }) => {
    return (
        <div>
            <h3 style={{ 'textAlign': 'center' }}>Список 1</h3>
            <div style={{
                'alignItems': 'center',
                'display': 'flex',
                'flexDirection': 'column',
            }}>
                {posts.map((post, index) => {
                    const { id, language: name, rate } = post;
                    return (
                        <Post
                            remove={remove}
                            id={id}
                            key={id}
                            name={name}
                            rate={rate}
                            number={index + 1}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PostList;