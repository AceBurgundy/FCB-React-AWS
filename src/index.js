import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//My first component
function Tasklist()
{
  return (
    <ul>
      <li className="tasks-item"> Follow Edukasyon.ph on Facebook. </li>
      <li className="tasks-item"> Follow AWS Siklab on Facebook. </li>
      <li className="tasks-item"> Follow Zuitt Coding Bootcamp on Facebook. </li>
    </ul>
  )
}

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
        <Tasklist/>
       </header>
    </div>
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
