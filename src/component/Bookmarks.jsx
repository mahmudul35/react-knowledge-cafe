import React from "react";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, time }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 bg-red-300 ml-4 mt-2 rounded-lg">
      <div className="px-3 bg-orange-400 py-4 mx-2 my-3 rounded-lg">
        <h1 className="text-xl">Reading Time: {time}</h1>
      </div>
      <h1 className="text-xl bg-sky-400 px-4 py-4 rounded-lg mt-4 mx-2">
        Bookmarked Blog:{bookmarks.length}
      </h1>

      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmarks;
