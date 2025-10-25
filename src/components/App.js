import "./../styles/App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLorem } from "./LoremSlice";

const App = () => {
  const dispatch = useDispatch();
  const { content, loading, error } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      <h1>A short Naration of Lorem Ipsum</h1>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      <ul>
        {content.map((post) => (
          <li key={post.id}>
            <h4 className="title">Title :Below Contains A title and Body gotten froma random API, Please take your time to Review</h4>
            <p className="body">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
