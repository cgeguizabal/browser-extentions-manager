import "./App.scss";
import "./style/layout.scss";
import "./style/variables.scss";

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
        <Credits />
      </div>
    </>
  );
}

function Credits() {
  return (
    <>
      {" "}
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/cgeguizabal">
          Guillermo Eguizabal
        </a>
        .
      </div>
    </>
  );
}

export default App;
