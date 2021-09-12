import logo from "./logo.svg";
import "./App.css";
import ControlledComponent from "./Conponents/ControlledConponent";
import UnControlledConponent from "./Conponents/UnControlledConponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ControlledComponent />
        <UnControlledConponent />
      </header>
    </div>
  );
}

export default App;
