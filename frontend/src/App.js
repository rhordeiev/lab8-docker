import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  function sendData() {
    axios
      .get("https://ec2-3-90-80-88.compute-1.amazonaws.com/users")
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={sendData}>
          Get data
        </button>
      </header>
    </div>
  );
}

export default App;
