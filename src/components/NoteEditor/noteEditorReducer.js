import { Type } from './noteEditorActions';

const noteEditorReducer = (state, action) => {
  switch (action.type) {
    case Type.ADDNOTE:
      return state + action.payload;

    default:
      return state;
  }
};

export default noteEditorReducer;
