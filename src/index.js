import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//My first component
function App()
{
  return (
  <div className = "app-header">
    <div>
      <header>
        <h1>My First to do list app</h1>
        <p>The most simple amazing todo-list React app.</p>
       </header>
    </div>
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
