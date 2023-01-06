import React, { useEffect, useState } from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { getTop100, getDetails } from "../../apiCalls/games";
import { cleanTop100Data, cleanDetails } from "../../utilities/utilities";
import { Game, CleanedGame, GameDetails } from "../../interfaces";
import { promises } from "stream";
import Top100 from "../Top100/Top100";
import Favorites from "../Favorites/Favorites";
import Details from "../Details/Details";
import { getRandomWord } from "../../utilities/utilities";
import { PageNotFound } from "../PageNotFound/PageNotFound";
const dice = require("../../images/dice.png");

function App() {
  const [top100, setTop100] = useState<CleanedGame[]>([]);
  const [details, setDetails] = useState<GameDetails>();
  const [bWord, setBWord] = useState<string>("Bonanza");
  const [favGames, setFavGames] = useState<CleanedGame[]>([
    {
      averageUserRating: 4.061560793825552,
      id: "TAAifFP590",
      image:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104",
      name: "Root",
      numUserRatings: 404,
      price: "47.99",
      rank: 1,
    },
    {
      averageUserRating: 4.222249667994687,
      id: "yqR4PtpO8X",
      image:
        "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/scythe-board-game.jpg?v=1611090922",
      name: "Scythe",
      numUserRatings: 753,
      price: "54.92",
      rank: 2,
    },
  ]);

  useEffect(() => {
    Promise.resolve(getTop100()).then((data) => {
      setTop100(cleanTop100Data(data));
    });
    setBWord(getRandomWord());
  }, []);

  // Promise.resolve(getDetails("TAAifFP590")).then((data) => {
  //   console.log(cleanDetails(data));
  // });

  return (
    <div className="App">
      <header>
        <img src={dice} />
        <h1>Boardgame {bWord}</h1>
      </header>
      <nav>
        <NavLink className="button" to="/">
          Top 100
        </NavLink>
        <NavLink className="button" to="/favorites">
          Favorites
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Top100 top100={top100} />} />
        <Route path="/favorites" element={<Favorites favGames={favGames} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
