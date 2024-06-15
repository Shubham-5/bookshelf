import Book from "./Book";

function BookList({ bookData }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {bookData?.map((book) => (
        <Book key={book.key} book={book} />
      ))}
    </div>
  );
}

export default BookList;
