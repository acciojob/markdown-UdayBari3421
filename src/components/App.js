import React, { useEffect, useState } from "react";
import "../styles/App.css";
const App = () => {
  let [data, setData] = useState("");

  useEffect(() => {
    if (!data) {
      setData(<p className="loading">loading</p>);
    }
    if (typeof data === "string") {
      if (data.includes("#")) {
        setData(
          <p style={{ fontWeight: "bold" }}> {data.split("#").join("")}</p>
        );
      }
    }
  }, [data]);
  return (
    <div className="app">
      <textarea
        className="textarea"
        onChange={(e) => setData(e.target.value)}
      ></textarea>
      <div className="preview">{data}</div>
    </div>
  );
};

export default App;
