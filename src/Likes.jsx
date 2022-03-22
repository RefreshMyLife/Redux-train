import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeDicrement, likeIncrement } from './redux/action/like';

function Likes() {
  const dispatch = useDispatch();
  const { likes, dislikes } = useSelector(({ likes }) => likes);

  const onClickLike = () => {
    dispatch(likeIncrement());
  };

  const onClickDislike = () => {
    dispatch(likeDicrement());
  };

  return (
    <div className="button-controls">
      <button onClick={onClickLike}> ❤︎ {likes} Likes</button>
      <button onClick={onClickDislike}>Dislike {dislikes}</button>
    </div>
  );
}

export default Likes;
