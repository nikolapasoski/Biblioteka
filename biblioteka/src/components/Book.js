import React from 'react';

function Book({ book }) {
  return (
    <div className="book">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
    </div>
  );
}

export default Book;
