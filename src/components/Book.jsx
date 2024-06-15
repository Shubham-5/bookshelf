import { addToBookshelf } from "../utils/storage";

const Book = ({ book }) => {
  return (
    <div>
      <div className="border p-4 mb-4 rounded flex flex-col justify-center text-center">
        <img
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "https://via.placeholder.com/150"
          }
          alt={book.title}
          className="mb-2 h-full max-h-60 w-full object-contain"
        />
        <h3 className="text-xl font-semibold h-7 truncate">{book.title}</h3>
        <p className="text-gray-600 truncate mb-4">
          {book.author_name?.join(", ")}
        </p>

        <button
          className="px-2 py-2 border rounded"
          onClick={() => addToBookshelf(book)}
        >
          Add to BookShelf
        </button>
      </div>
    </div>
  );
};

export default Book;
