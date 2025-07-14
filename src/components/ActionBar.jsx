import "../style/actionbar.scss";
import useButtonStore from "../../store/buttonstore";

function ActionBar() {
  const { all, active, inactive, changeAll, changeActive, changeInactive } =
    useButtonStore();
  return (
    <>
      <div className="actionBarContainer">
        <h2>Extensions List</h2>
        <div className="buttons">
          <button
            className={`buttons_btn ${all ? "show" : ""}`}
            onClick={changeAll}
          >
            All
          </button>
          <button
            onClick={changeActive}
            className={`buttons_btn ${active ? "show" : ""}`}
          >
            Active
          </button>
          <button
            onClick={changeInactive}
            className={`buttons_btn ${inactive ? "show" : ""}`}
          >
            Inactive
          </button>
        </div>
      </div>
    </>
  );
}
export default ActionBar;
