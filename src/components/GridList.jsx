import ExtensionBox from "./ExtensionBox";

import "../style/gridlistcontainer.scss";
import useButtonStore from "../../store/buttonstore";

function GridList() {
  const { all, active, inactive, extensionsNew } = useButtonStore();
  const extensions = extensionsNew.map((item) => ({ ...item }));
  const activeExtensions = extensionsNew.filter((ext) => ext.isActive === true);
  const inactiveExtensions = extensionsNew.filter(
    (ext) => ext.isActive === false
  );
  return (
    <>
      <div className="gridListContainer">
        {all &&
          extensions.map((item, index) => (
            <ExtensionBox
              key={item.id}
              id={item.id}
              check={index}
              logo={item.logo}
              name={item.name}
              text={item.description}
              isActive={item.isActive}
            />
          ))}
        {active &&
          activeExtensions.map((item, index) => (
            <ExtensionBox
              key={item.id}
              id={item.id}
              check={index}
              logo={item.logo}
              name={item.name}
              text={item.description}
              isActive={item.isActive}
            />
          ))}
        {inactive &&
          inactiveExtensions.map((item, index) => (
            <ExtensionBox
              key={item.id}
              id={item.id}
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
