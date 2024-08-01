import React from "react";
import Tasks from "./Tasks";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <h1>Task Management</h1>
      <Tasks />
    </div>
  );
};

export default App;
