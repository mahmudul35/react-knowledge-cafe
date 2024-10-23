import "./App.css";
import Blogs from "./component/Blogs";
import Bookmarks from "./component/Bookmarks";
import Header from "./component/Header";

function App() {
  return (
    <div className="mx-6 p-6">
      <Header />
      <div className="md:flex">
        <Blogs />
        <Bookmarks />
      </div>
    </div>
  );
}

export default App;
