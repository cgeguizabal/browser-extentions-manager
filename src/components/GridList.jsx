import ExtensionBox from "./ExtensionBox";
import data from "../data.json";
import "../style/gridlistcontainer.scss";
import useButtonStore from "../../store/buttonstore";

function GridList() {
  const { all, active, inactive } = useButtonStore();
  const extensions = data.map((item) => ({ ...item }));
  return (
    <>
      <div className="gridListContainer">
        {extensions.map((item, index) => (
          <ExtensionBox
            key={index}
            check={index}
            logo={item.logo}
            name={item.name}
            text={item.description}
            isActive={item.isActive}
          />
        ))}
      </div>
    </>
  );
}

export default GridList;
