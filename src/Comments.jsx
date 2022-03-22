import React, { useEffect, useState } from 'react';
import SingleComments from './SingleComments';
import { useDispatch, useSelector } from 'react-redux';
import { inputCommentText, loadComment } from './redux/action/text';
import uniqid from 'uniqid';

function Comments() {
  const dispatch = useDispatch();

  const [textComment, setTextComment] = useState();
  const { comments } = useSelector(({ comments }) => comments);
  const handleChange = (e) => {
    setTextComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    return dispatch(inputCommentText(textComment, id));
  };
  useEffect(() => {
    dispatch(loadComment());
  }, [dispatch]);

  return (
    <div className="card-comments">
      <form className="comments-item-create" onSubmit={handleSubmit}>
        <input type="text" value={textComment} onChange={handleChange} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((obj) => <SingleComments dispatch={dispatch} comments={obj} key={obj.id} />)}
    </div>
  );
}

export default Comments;
