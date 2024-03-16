import "./App.css";
import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newToDoList = [...toDoList, newTask];
    setToDoList(newToDoList);
  };

  const deleteTask = (taskName) => {
    const newToDoList = toDoList.filter((task) => {
      if (task === taskName) {
        return false;
      } else {
        return true;
      }
    });

    setToDoList(newToDoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {toDoList.map((task) => {
          return (
            <div className="inList">
              <h1>{task}</h1>
              <button
                onClick={() => {
                  deleteTask(task);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
