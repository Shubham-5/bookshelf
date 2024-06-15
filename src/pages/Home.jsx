import { useState, useCallback, useEffect } from "react";

import SearchInput from "../components/SearchInput";
import BookList from "../components/BookList";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [bookData, setBookData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchBooks = useCallback(
    async (query) => {
      if (searchQuery) {
        try {
          setLoading(true);
          const res = await fetch(
            `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
          );
          const data = await res.json();
          setBookData(data.docs);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      }
    },
    [searchQuery]
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      fetchBooks(debouncedQuery);
    }
  }, [debouncedQuery, fetchBooks]);

  return (
    <div className="mx-auto space-y-6">
      <SearchInput onChange={setSearchQuery} searchQuery={searchQuery} />
      {isLoading ? (
        <p className="text-center">Loading... </p>
      ) : (
        <BookList bookData={bookData} />
      )}

      {searchQuery?.length == 0 && (
        <p className="text-center text-sm text-gray-600">
          Try to search book by title
        </p>
      )}
    </div>
  );
};

export default Home;
