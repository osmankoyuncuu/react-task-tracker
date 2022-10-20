import "./App.css";
import AddTask from "./component/AddTask/AddTask";
import Header from "./component/Header/Header";
import ShowHideButton from "./component/ShowHideButton/ShowHideButton";
import TaskList from "./component/TaskList/TaskList";
import { useState, useEffect } from "react";

const App = () => {
  const [showHide, setShowHide] = useState(true);
  const [addTask, setAddTask] = useState(
    JSON.parse(localStorage.getItem("Task")) || []
  );

  useEffect(() => {
    localStorage.setItem("Task", JSON.stringify(addTask));
  }, [addTask]);

  return (
    <div className="container">
      <Header />
      <ShowHideButton showHide={showHide} setShowHide={setShowHide} />
      {showHide && <AddTask addTask={addTask} setAddTask={setAddTask} />}
      <TaskList addTask={addTask} setAddTask={setAddTask} />
    </div>
  );
};

export default App;
