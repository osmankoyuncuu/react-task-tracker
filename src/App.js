import "./App.css";
import AddTask from "./component/AddTask/AddTask";
import Header from "./component/Header/Header";
import ShowHideButton from "./component/ShowHideButton/ShowHideButton";
import TaskList from "./component/TaskList/TaskList";
import { useState, useEffect } from "react";
import Filter from "./component/Filter/Filter";

const App = () => {
  const [showHide, setShowHide] = useState(true);
  const [addTask, setAddTask] = useState(
    JSON.parse(localStorage.getItem("Task")) || []
  );
  const [filter, setFilter] = useState([]);
  const filtered = (e) => {
    let filtered;
    if (e.target.name === "all") {
      filtered = addTask.map((item) => item);
    } else if (e.target.name === "complete") {
      filtered = addTask.filter((item) => item.complete);
    } else {
      filtered = addTask.filter((item) => !item.complete);
    }
    setFilter(filtered);
  };
  useEffect(() => {
    setFilter(addTask);
  }, []);

  useEffect(() => {
    localStorage.setItem("Task", JSON.stringify(addTask));
    setFilter(addTask);
  }, [addTask]);

  return (
    <div className="container">
      <Header />
      <ShowHideButton showHide={showHide} setShowHide={setShowHide} />
      {showHide && <AddTask addTask={addTask} setAddTask={setAddTask} />}
      <Filter filter={filter} filtered={filtered} />
      <TaskList addTask={addTask} setAddTask={setAddTask} filter={filter} />
    </div>
  );
};

export default App;
