import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs";
import Bookmarks from "./component/Bookmarks";
import Header from "./component/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);
  const handleBookmark = (blog) => {
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleTime = (ID, reading_time) => {
    setTime(time + reading_time);
    //remove bookmarked blog
    const newBookmarks = bookmarks.filter((bookmark) => bookmark.ID !== ID);
    setBookmarks(newBookmarks);
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Header />
      <div className="md:flex">
        <Blogs handleBookmark={handleBookmark} handleTime={handleTime} />
        <Bookmarks bookmarks={bookmarks} time={time} />
      </div>
    </div>
  );
}

export default App;
