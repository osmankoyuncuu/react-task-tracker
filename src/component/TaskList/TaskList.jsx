import "./TaskList.css";
import { useState } from "react";

const TaskList = ({ addTask, setAddTask, removeList }) => {
  console.log(addTask);
  const [listCheck, setListCheck] = useState(false);
  const handleCheck = (e) => {
    setListCheck(!listCheck);
    if (e.target.parentElement.classList.contains("list")) {
      if (listCheck) {
        e.target.parentElement.className = "list check";
        e.target.parentElement.firstElementChild.className =
          "fa-solid fa-check";
      } else {
        e.target.parentElement.className = "list";
        e.target.parentElement.firstElementChild.className =
          "fa-solid fa-check display-none";
      }
    }
  };
  return addTask.length !== 0 ? (
    <ul className="taskList">
      {addTask.map((item) => {
        return (
          <li key={item.id} id={item.id} onClick={handleCheck} className="list">
            <i className={`fa-solid fa-check display-none`}></i>
            <h3>{item.task}</h3>
            <p>{item.day}</p>
            <i
              className="fa-solid fa-xmark"
              onClick={() => removeList(item.id)}
            ></i>
          </li>
        );
      })}
    </ul>
  ) : (
    <h3 className="notTask">No Task to Show</h3>
  );
};

export default TaskList;
