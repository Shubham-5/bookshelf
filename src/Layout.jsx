import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MyBookshelf from "./pages/MyBookshelf";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="max-w-lg mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/bookshelf" element={<MyBookshelf />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
