import "./TaskList.css";

const TaskList = () => {
  return (
    <div className="taskList">
      <ul>
        <li>
          <i class="fa-solid fa-check"></i>
          <h3>Stady React Pre-Class</h3>
          <p>Dec 12th at 2.30pm</p>
          <i class="fa-solid fa-xmark"></i>
        </li>
        <li>
          <i class="fa-solid fa-check"></i>
          <h3>Stady React Pre-Class</h3>
          <p>Dec 12th at 2.30pm</p>
          <i class="fa-solid fa-xmark"></i>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
