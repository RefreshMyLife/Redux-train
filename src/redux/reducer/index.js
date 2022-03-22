import { combineReducers } from 'redux';
import likes from './like';
import comments from './comments';
import loaderComments from './loader';

const rootReducer = combineReducers({
  likes,
  comments,
  loaderComments,
});

export default rootReducer;
