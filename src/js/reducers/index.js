import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';

const initialState = {
  articles: [],
  message: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  else if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      message: state.message.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;
