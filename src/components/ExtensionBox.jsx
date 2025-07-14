import "../style/extensionsBox.scss";

function ExtensionBox({ check, logo, name, text, isActive }) {
  return (
    <div className="extensionBoxContainer">
      <div className="extensionBoxContainer_inner">
        <div className="topContent">
          <img className="topContent_image" src={logo} alt="Image" />
          <div>
            <h4 className="topContent_title">{name}</h4>
            <p className="topContent_text">{text}</p>
          </div>
        </div>
        <div className="bottomContent">
          <button className="bottomContent_btn">Remove</button>
          <div>
            <input
              type="checkbox"
              id={`check-${check}`}
              defaultChecked={isActive}
            />
            <label
              htmlFor={`check-${check}`}
              className="bottomContent_label"
            ></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtensionBox;
