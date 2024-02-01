import React, { useEffect, useState } from "react";
import "../styles/App.css";
const App = () => {
  let [data, setData] = useState("");

  useEffect(() => {
    if (!data) {
      setData(<p className="loading">loading</p>);
    }
  }, [data]);
  return (
    <div className="app">
      <textarea
        className="textarea"
        onChange={(e) => setData(e.target.value)}
      ></textarea>
      <div className="preview" style={style}>
        <h1>{data}</h1>
      </div>
    </div>
  );
};

export default App;
