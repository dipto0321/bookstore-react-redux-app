import React from "react";

const Book = props => {
  const { id, title, category } = props.book;
  const { handleRemove } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" onClick={() => handleRemove(id)}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default Book;
