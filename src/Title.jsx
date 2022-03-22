import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputTitleText } from './redux/action/text';

function Title() {
  const dispatch = useDispatch();
  const { title } = useSelector(({ comments }) => comments);

  const handleChange = (e) => {
    return dispatch(inputTitleText(e.target.value));
  };
  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange} />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default Title;
