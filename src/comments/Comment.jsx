import React from 'react'
import { deleteComment } from '../api';

export const Comment = ({comment, replies, currentUserId , deleteComment, activeComment, setActiveComment}) => {
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const canDelete = currentUserId === comment.userId && !timePassed;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();


  return (
    <div className='comment'>
      <div className="comment-image-container">
        <img src="/user-icon.png" alt="" /> 
      </div>

      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>

        <div className="comment-text">{comment.body}</div>
        <div className="comment-actions">
          {canReply && 
            <div className="comment-action" 
              onClick={() =>
              setActiveComment({id: comment.id, type: 'replying'})}
              >
                Reply
            </div>
          }

          {canEdit && <div className="comment-action"     
              onClick={() => setActiveComment({id: comment.id, type: 'editing'})}
          >Edit</div>}
          {canDelete && <div className="comment-action" onClick={() => deleteComment(comment.id)}>Delete</div>}
        </div> 

        {replies.length > 0 && (
          <div className="replies">
            {replies.map(reply => (
              <Comment comment={reply} key={reply.id} replies={[]} currentUserId={currentUserId}
              deleteComment={deleteComment}
              
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Comment;