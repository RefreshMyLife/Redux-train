import { UPDATE_COMMENT_TEXT, INPUT_COMMENT_TEXT, DELETE_COMMENT, LOAD_COMMENT } from './../types';

const initialState = {
  comments: [],
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_COMMENT_TEXT:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
    case UPDATE_COMMENT_TEXT:
      const { data } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((res) => res.id === data.id);

      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];

      return {
        ...state,
        comments: nextComments,
      };
    case DELETE_COMMENT:
      return (() => {
        const { id } = action;
        const { comments } = state;
        const itemIndex = comments.findIndex((res) => res.id === id);

        const nextComments = [...comments.slice(0, itemIndex), ...comments.slice(itemIndex + 1)];

        return {
          ...state,
          comments: nextComments,
        };
      })();
    case LOAD_COMMENT:
      const commentsNew = action.data.map((res) => ({
        text: res.name,
        id: res.id,
      }));
      return {
        ...state,
        comments: commentsNew,
      };

    default:
      return state;
  }
};

export default comments;
