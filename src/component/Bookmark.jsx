import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  console.log(title);
  return (
    <div>
      <h1 className="bg-slate-300 px-2 py-4 rounded-lg m-3 text-center">
        {title}
      </h1>
    </div>
  );
};

export default Bookmark;
