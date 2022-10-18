import "./AddTask.css";
const AddTask = () => {
  return (
    <div className="addTaskContainer">
      <div>
        <label htmlFor="">Task</label>
        <input type="text" placeholder="Add Task" />
      </div>
      <div>
        <label htmlFor="">Day & Time</label>
        <input type="date" />
      </div>
      <button className="addTask">Save Task</button>
    </div>
  );
};

export default AddTask;
