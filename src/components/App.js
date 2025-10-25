import "./../styles/App.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./LoremSlice";

const App = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.lorem);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      dispatch(fetchPosts());
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>A short Naration of Lorem Ipsum</h1>

      {showIntro ? (
        <p>
          Below Contains A title and Body gotten froma random API, Please take
          your time to Review
        </p>
      ) : loading ? (
        <h4>Loading...</h4>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h4 className="title">Title :{post.title}</h4>
              <p className="body">Body :{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
