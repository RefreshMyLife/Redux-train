import {
  LOADER_COMMENTS_OFF,
  LOAD_COMMENT,
  INPUT_COMMENT_TEXT,
  UPDATE_COMMENT_TEXT,
  INPUT_TITLE_TEXT,
  DELETE_COMMENT,
  LOADER_COMMENTS_ON,
} from '../types';

export const inputTitleText = (text) => ({
  type: INPUT_TITLE_TEXT,
  title: text,
});

export const inputCommentText = (text, id) => ({
  type: INPUT_COMMENT_TEXT,
  data: { text, id },
});

export const updateCommentText = (text, id) => ({
  type: UPDATE_COMMENT_TEXT,
  data: { text, id },
});

export const deleteCommentText = (id) => ({
  type: DELETE_COMMENT,
  id,
});

export function loadComment() {
  return async (dispatch) => {
    dispatch(loadCommentsOn());
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
    const jsonData = await response.json();
    setTimeout(() => {
      dispatch({
        type: LOAD_COMMENT,
        data: jsonData,
      });
      dispatch(loadCommentsOff());
    }, 3000);
  };
}

export function loadCommentsOn() {
  return {
    type: LOADER_COMMENTS_ON,
  };
}
export function loadCommentsOff() {
  return {
    type: LOADER_COMMENTS_OFF,
  };
}
