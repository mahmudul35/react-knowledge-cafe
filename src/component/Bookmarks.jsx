import React from "react";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 bg-red-300 ml-4">
      <h1 className="text-2xl bg-sky-400 px-4 py-4 rounded-lg mt-4">
        Bookmarked Blog:{bookmarks.length}
      </h1>

      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmarks;
