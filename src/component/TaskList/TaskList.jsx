import "./TaskList.css";

const TaskList = ({ addTask, setAddTask, removeList }) => {
  const completeList = (e, id) => {
    addTask.map((item) => {
      if (item.id === Number(e.target.parentElement.getAttribute("id"))) {
        item.complete = !item.complete;
        console.log(item);
        if (item.complete) {
          e.target.parentElement.className = "list complete";
          e.target.parentElement.firstElementChild.className =
            "fa-solid fa-check";
        } else {
          e.target.parentElement.className = "list";
          e.target.parentElement.firstElementChild.className =
            "fa-solid fa-check display-none";
        }
      }
    });
    localStorage.setItem("Task", JSON.stringify(addTask));
  };
  return addTask.length !== 0 ? (
    <ul className="taskList">
      {addTask.map((item) => {
        return (
          <li
            key={item.id}
            id={item.id}
            onClick={(e, id) => completeList(e, id)}
            className="list"
          >
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
