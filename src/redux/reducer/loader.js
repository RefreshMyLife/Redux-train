import { LOADER_COMMENTS_OFF, LOADER_COMMENTS_ON } from '../types';

const initialState = {
  loading: false,
};

const loaderComments = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_COMMENTS_ON:
      return {
        ...state,
        loading: true,
      };
    case LOADER_COMMENTS_OFF:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default loaderComments;
