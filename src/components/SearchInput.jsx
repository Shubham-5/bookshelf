const SearchInput = ({ onChange, searchQuery }) => {
  return (
    <input
      type="search"
      placeholder="Search books..."
      className="block mx-auto w-full max-w-sm border px-4 h-10 rounded outline-none hover:border-blue-400 focus:border-blue-500"
      value={searchQuery}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchInput;
