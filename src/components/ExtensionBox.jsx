import { useState } from "react";
import useButtonStore from "../../store/buttonstore";
import "../style/extensionsBox.scss";

function ExtensionBox({ id, check, logo, name, text, isActive }) {
  const toggleExtension = useButtonStore((state) => state.toggleExtension);
  const removeExtension = useButtonStore((state) => state.removeExtension);
  const [isRemoving, setIsRemoving] = useState(false);
  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeExtension(id);
    }, 300);
  };

  const handleToggle = () => {
    setTimeout(() => {
      toggleExtension(id);
    }, 300);
  };
  return (
    <div className={`extensionBoxContainer ${isRemoving ? "fade-out" : ""}`}>
      <div className="extensionBoxContainer_inner">
        <div className="topContent">
          <img className="topContent_image" src={logo} alt="Image" />
          <div>
            <h4 className="topContent_title">{name}</h4>
            <p className="topContent_text">{text}</p>
          </div>
        </div>
        <div className="bottomContent">
          <button onClick={handleRemove} className="bottomContent_btn">
            Remove
          </button>
          <div>
            <input
              type="checkbox"
              id={`check-${check}`}
              defaultChecked={isActive}
              onChange={handleToggle}
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
