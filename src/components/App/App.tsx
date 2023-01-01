import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getTop100, getDetails } from "../../apiCalls/games";
import { cleanTop100Data, cleanDetails } from "../../utilities/utilities";
import { promises } from "stream";

function App() {
  Promise.resolve(getTop100()).then((data) => {
    console.log(cleanTop100Data(data));
  });

  Promise.resolve(getDetails("TAAifFP590")).then((data) => {
    console.log(cleanDetails(data));
  });

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
