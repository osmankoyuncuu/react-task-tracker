import "./AddTask.css";
import { useState } from "react";
const AddTask = ({ addTask, setAddTask }) => {
  const [changeTask, setChangeTask] = useState({
    id: "",
    task: "",
    day: "",
  });
  const { task, day } = changeTask;
  const handleChangeTask = (e) => {
    setChangeTask({
      ...changeTask,
      id: new Date().getTime(),
      [e.target.id]: e.target.value,
    });
  };
  const handleSave = () => {
    if (task === "" && day === "") {
      alert("Please enter a task and day&time.");
    } else if (task === "") {
      alert("Please enter a task.");
    } else if (day === "") {
      alert("Please enter a day&time.");
    } else {
      setAddTask([...addTask, changeTask]);
      setChangeTask({
        id: "",
        task: "",
        day: "",
      });
    }
  };

  return (
    <div className="addTaskContainer">
      <div>
        <label htmlFor="task">Task</label>
        <input
          id="task"
          type="text"
          placeholder="Add Task"
          onChange={handleChangeTask}
          value={task}
        />
      </div>
      <div>
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          type="text"
          placeholder="Add Day & Time"
          onChange={handleChangeTask}
          value={day}
        />
      </div>
      <button className="addTask" onClick={handleSave}>
        Save Task
      </button>
    </div>
  );
};

export default AddTask;
