import "./../styles/App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "./LoremSlice";

const App = () => {
  const { content, loading, error } = useSelector((state) => state.lorem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      <h1>
        Below Contains A title and Body gotten from a random API, Please take
        your time to Review
      </h1>

      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}

      <ul>
        {content.map((post) => (
          <li key={post.id}>
            <h4 className="title">{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
