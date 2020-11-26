import React from 'react';

const handleChange = ({ target }) => {
  const { name, value } = target;
  console.log(`name: ${name}; value: ${value}`);
};

const NoteEditor = ({}) => (
  <form action="submit">
    <input type="text" name="input" onChange={handleChange} />
    <textarea
      name="textnote"
      cols="30"
      rows="10"
      onChange={handleChange}
    ></textarea>
    <button type="submit">Add note</button>
  </form>
);

export default NoteEditor;
