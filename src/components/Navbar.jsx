import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16">
      <h2 className="font-semibold">BookShelf</h2>

      <Link to="/bookshelf">
        <h2 className="text-sm font-semibold text-gray-600 hover:text-gray-800">
          My BookShelf
        </h2>
      </Link>
    </div>
  );
};

export default Navbar;
