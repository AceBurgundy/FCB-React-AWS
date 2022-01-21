import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//My first component
function Task(props)
{
  //console.log(props);

  return (
      <li className="tasks-item">{props.taskName}</li>
    );
}

function Tasklist()
{
  const taskItemList = [
    "Follow Edukasyon.ph on Facebook.",
    "Follow AWS Siklab Pilipinas on Facebook.",
    "Follow Zuitt Coding Bootcamp on Facebook."
  ];

  return (
    <div>
    <input className="task-input" />
    <ul>
      {taskItemList.map((task, index) => {
        return <Task key={index} taskName = {task} />
      })}
    </ul>
    </div>
  );
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
