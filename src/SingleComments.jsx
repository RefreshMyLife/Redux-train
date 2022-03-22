import React, { useEffect, useState } from 'react';
import { deleteCommentText, updateCommentText } from './redux/action/text';

function SingleComments({ comments, dispatch }) {
  const { text, id } = comments;
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (text) setCommentText(text);
  }, [text]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCommentText(commentText, id));
  };
  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCommentText(id));
  };

  return (
    <form className="comments-item" onSubmit={handleUpdate}>
      <div className="comments-item-delete" onClick={handleDelete}>
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleChange} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComments;
