import './App.css';
import React, {useState, useEffect} from "react";
import * as Env from "./enviornments"
import Parse from "parse";
import { getById } from './Common/VehicleService';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    return getById().then((data) => {
      console.log("Data defined", data);
      setVehicle(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
