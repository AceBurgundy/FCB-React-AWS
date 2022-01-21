import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import TasksList from "./components/TasksList";

//My first component
function App()
{
  const paraStyle = {
      "marginBottom" : "15px"
}

  return (
  <div className = "app-header">
    <div>
      <header>
        <h1>My First to do list app</h1>
        <p style={paraStyle}>The most simple amazing todo-list React app.</p>
        <TasksList/>
       </header>
    </div>
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
