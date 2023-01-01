import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getTop100 } from "../../apiCalls/games";
import { cleanTop100Data } from "../../utilities/utilities";
import { promises } from "stream";

function App() {
  Promise.resolve(getTop100()).then((data) => {
    console.log(cleanTop100Data(data));
  });
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
