import "./App.css";
import AddTask from "./component/AddTask/AddTask";
import Header from "./component/Header/Header";
import ShowHideButton from "./component/ShowHideButton/ShowHideButton";
import TaskList from "./component/TaskList/TaskList";
import { useState } from "react";

const App = () => {
  const [showHide, setShowHide] = useState(true);
  const [addTask, setAddTask] = useState([]);

  const removeList = (id) => {
    const remove = addTask.filter((item) => item.id !== id);
    setAddTask(remove);
  };
  return (
    <div className="container">
      <Header />
      <ShowHideButton showHide={showHide} setShowHide={setShowHide} />
      {showHide && <AddTask addTask={addTask} setAddTask={setAddTask} />}
      <TaskList
        addTask={addTask}
        setAddTask={setAddTask}
        removeList={removeList}
      />
    </div>
  );
};

export default App;
