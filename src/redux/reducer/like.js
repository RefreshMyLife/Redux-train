import { LIKE_DECREMENT, LIKE_INCREMENT } from '../types';

const initialState = {
  likes: 0,
  dislikes: 0,
};

const likes = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_INCREMENT:
      return {
        ...state,
        likes: state.likes + 1,
      };
    case LIKE_DECREMENT:
      return {
        ...state,
        dislikes: state.dislikes + 1,
      };

    default:
      return state;
  }
};

export default likes;
