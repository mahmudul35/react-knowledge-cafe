import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs";
import Bookmarks from "./component/Bookmarks";
import Header from "./component/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Header />
      <div className="md:flex">
        <Blogs handleBookmark={handleBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  );
}

export default App;
