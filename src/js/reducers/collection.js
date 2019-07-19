import {
  ADD_BOOK, REMOVE_BOOK, SET_COLLECTION, UPDATE_CHAPTER,
} from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case SET_COLLECTION:
      return action.collection;
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);
    case UPDATE_CHAPTER:
    {
      const { id, newChapter } = action;
      const bookIndex = state.findIndex(book => book.id === id);
      const newState = [...state];
      newState[bookIndex] = { ...newState[bookIndex], currentChapter: newChapter };
      return newState;
    }
    default:
      return state;
  }
};
