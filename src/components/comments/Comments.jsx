import React from "react";

import "./Comments.css";

const Comments = ({ comments }) => {
   return (
      <div>
         <div className="comments__title">
            <h2>Комментарии</h2>
         </div>
         <div>
            {comments.map((comment) => {
               const { id, body, name, email } = comment;
               return (
                  <div key={id} className="comment">
                     <p>{body}</p>
                     <div className="comment__user__info">
                        <span>User: {name}</span>
                        <span>{email}</span>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Comments;
