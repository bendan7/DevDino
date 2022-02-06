import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import NewPostPage from "./pages/NewPost";
import PostsListPage from "./pages/PostsListPage";
import { RoutesUrls } from "./utils/interfaces";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsListPage />} />
        <Route path={RoutesUrls.CREATE_NEW_POST} element={<NewPostPage />} />
        <Route path={RoutesUrls.POST} element={<PostPage />}>
          <Route path=":postId" element={<PostPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
