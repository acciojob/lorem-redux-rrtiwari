import "./../styles/App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./LoremSlice";

const App = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h4>A short Naration of Lorem Ipsum</h4>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p className="title">Title :{post.title}</p>
              <p className="body">Body :{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
