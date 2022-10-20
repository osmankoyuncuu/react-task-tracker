import "./Filter.css";

const Filter = ({ filter, filtered }) => {
  return (
    <div className="filter-container">
      <div className="btn-container">
        <button onClick={(e) => filtered(e)} name="all">
          All
        </button>
        <button onClick={(e) => filtered(e)} name="complete">
          Complete
        </button>
        <button onClick={(e) => filtered(e)} name="uncomplete">
          Uncomplete
        </button>
      </div>
      <h4>{filter.length} Task</h4>
    </div>
  );
};

export default Filter;
