import "./TaskList.css";

const TaskList = ({ addTask, setAddTask }) => {
  const completeList = (e, id) => {
    function mapFunc(item) {
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
    }
    addTask.map(mapFunc);
    localStorage.setItem("Task", JSON.stringify(addTask));
  };

  const removeList = (id) => {
    const remove = addTask.filter((item) => item.id !== id);
    setAddTask(remove);
  };

  return addTask.length !== 0 ? (
    <ul className="taskList">
      {addTask.map((item) => {
        return (
          <li
            key={item.id}
            id={item.id}
            onClick={(e, id) => completeList(e, id)}
            className={`list ${item.complete ? "complete" : ""}`}
          >
            <i
              className={`fa-solid fa-check ${
                item.complete ? "" : "display-none"
              }`}
            ></i>
            <h3>{item.task}</h3>
            <p>{new Date(item.date).toString().replace(/GMT.*/g, "")}</p>
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
