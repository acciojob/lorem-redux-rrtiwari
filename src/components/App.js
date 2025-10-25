import "./../styles/App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLorem } from "./LoremSlice";

const App = () => {
  const { title, body, loading, error } = useSelector((state) => state.lorem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      <h1>Lorem Redux</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};

export default App;
