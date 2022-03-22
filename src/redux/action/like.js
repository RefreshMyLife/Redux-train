import { LIKE_DECREMENT, LIKE_INCREMENT } from '../types';

export const likeIncrement = () => ({
  type: LIKE_INCREMENT,
});

export const likeDicrement = () => ({
  type: LIKE_DECREMENT,
});
