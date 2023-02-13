import "./QuestionFiltter.css";

const QuestionFiltter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    //console.log(event.target.value);
  };

  return (
    <div className="questions-filter">
      <div className="questions-filter__control">
        <label>Filterd by Category</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="All">All</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>
    </div>
  );
};

export default QuestionFiltter;