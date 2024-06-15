import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Book from "../components/Book";

const MyBookshelf = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const myBookshelf = localStorage.getItem("myBookshelf");
    const bookshelf = JSON.parse(myBookshelf);
    setBookData(bookshelf);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {bookData?.map((book) => (
          <Book key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default MyBookshelf;
