import "./ShowHideButton.css";
const ShowHideButton = ({ showHide, setShowHide }) => {
  const handleShowHideButton = (e) => {
    setShowHide(!showHide);
    showHide
      ? (e.target.className = "hideButton")
      : (e.target.className = "showButton");
  };
  return (
    <button onClick={handleShowHideButton} className="showButton">
      {showHide ? `Close Add Task Bar` : `Show Add Task Bar`}
    </button>
  );
};

export default ShowHideButton;
