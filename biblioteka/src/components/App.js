import React, { useState } from 'react';
import BookList from './BookList';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Footer from './Footer';
import booksData from '../data/books.json';
import '../styles/index.css';

function App() {
  const [books, setBooks] = useState(booksData);

  const handleSearch = (query) => {
    const filteredBooks = booksData.filter((book) => {
      return (
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.toLowerCase().includes(query.toLowerCase())
      );
    });
    setBooks(filteredBooks);
  };

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <Navbar />
      <SearchBar handleSearch={handleSearch} handleDelete={() => setBooks(booksData)} />
      <BookList books={books} handleDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;

