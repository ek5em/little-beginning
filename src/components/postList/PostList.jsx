import { TransitionGroup, CSSTransition } from "react-transition-group";
import Post from "../post/Post";

import "./PostList.css";

const PostList = ({ posts, remove }) => {
   return (
      <div>
         <h3 style={{ textAlign: "center" }}>Список 1</h3>
         <div
            style={{
               alignItems: "center",
               display: "flex",
               flexDirection: "column",
            }}
         >
            <TransitionGroup>
               {posts.map((post) => {
                  const { id, title, body, userId } = post;
                  return (
                     <CSSTransition key={id} timeout={500} classNames="post">
                        <Post
                           remove={remove}
                           id={id}
                           body={body}
                           title={title}
                           userId={userId}
                        />
                     </CSSTransition>
                  );
               })}
            </TransitionGroup>
         </div>
      </div>
   );
};

export default PostList;
