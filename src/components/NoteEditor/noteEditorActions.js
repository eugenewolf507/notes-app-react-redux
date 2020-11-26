export const Type = { ADDNOTE: 'ADDNOTE' };

export const addNote = text => ({
  type: Type.ADDNOTE,
  payload: {
    id: Date.now(),
    text,
  },
});
