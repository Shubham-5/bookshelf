import { useState } from "react";
import SearchInput from "../components/SearchInput";
import BookList from "../components/BookList";
import { useCallback } from "react";
import { useEffect } from "react";

const SEARCH_API = `https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1`;
const COVER_API = `https://covers.openlibrary.org/b/id/258027-M.jpg`;

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [bookData, setBookData] = useState([]);

  const fetchBooks = useCallback(async (query) => {
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      const data = await res.json();
      setBookData(data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

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
    <div className="mx-auto space-y-4">
      <SearchInput onChange={setSearchQuery} searchQuery={searchQuery} />
      <BookList bookData={bookData} />
    </div>
  );
};

export default Home;
