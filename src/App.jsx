import "./App.scss";
import "./style/layout.scss";

import GridList from "./components/GridList";
import NavBar from "./components/NavBar";
import ActionBar from "./components/ActionBar";

function App() {
  return (
    <>
      <div className="mainContainer">
        <NavBar />
        <ActionBar />
        <GridList />
      </div>
    </>
  );
}

export default App;
