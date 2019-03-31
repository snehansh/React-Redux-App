import { ADD_ARTICLE } from '../constants/action-types';
import { foundbadWord } from '../actions/index';

import uuidv1 from 'uuid';

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      //do your stuff
      if (action.type === ADD_ARTICLE) {

        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );

        if (foundWord.length) {
          let message = "Bad word found. Article not submitted."
          const id = uuidv1();
          message = {message, id};
          return dispatch(foundbadWord(message));
        }
      }

      return next(action);
    }
  }
}
