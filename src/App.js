import "./App.css";
import AddTask from "./component/AddTask/AddTask";
import Header from "./component/Header/Header";
import ShowHideButton from "./component/ShowHideButton/ShowHideButton";
import TaskList from "./component/TaskList/TaskList";

const App = () => {
  return (
    <div className="container">
      <Header />
      <ShowHideButton />
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
