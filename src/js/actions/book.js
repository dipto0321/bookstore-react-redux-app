import {
  ADD_BOOK,
  REMOVE_BOOK,
  SET_COLLECTION,
  SWITCH_ADD_BOOK_MODE,
  SWITCH_PROGRESS_UPDATE,
  UPDATE_CHAPTER,
} from './actionTypes';

const setCollection = collection => ({
  type: SET_COLLECTION,
  collection,
});

const addBook = book => ({
  type: ADD_BOOK,
  book,
});

const switchAddBookMode = book => ({
  type: SWITCH_ADD_BOOK_MODE,
  book,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

const switchProgressUpdate = id => ({
  type: SWITCH_PROGRESS_UPDATE,
  id,
});

const updateChapter = (id, newChapter) => ({
  type: UPDATE_CHAPTER,
  id,
  newChapter,
});

export {
  addBook,
  removeBook,
  setCollection,
  switchAddBookMode,
  switchProgressUpdate,
  updateChapter,
};
