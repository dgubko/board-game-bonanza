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
import Error from '../Error/Error'
const dice = require("../../images/dice.png");

function App() {
  const [top100, setTop100] = useState<CleanedGame[]>([]);
  const [details, setDetails] = useState<GameDetails>();
  const [bWord, setBWord] = useState<string>("Bonanza");
  const [favGames, setFavGames] = useState<CleanedGame[]>([])
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    Promise.resolve(getTop100()).then((data) => {
      setTop100(cleanTop100Data(data));
    })
    .catch(response => {
      console.log(response.status)
      setError(true)
    })
    setBWord(getRandomWord());
  }, []);

  const toggleFavorite = (id: string) => {
    const newGames = top100.map(game => {
      if(game.id === id) {
        console.log(game.isFavorited)
        return {
          ...game, isFavorited: !game.isFavorited
        }
      }
      return game
    })
    setTop100(newGames)
  }

  const closeError = () => {
    setError(false)
  }

  const updateError = () => {
    setError(true)
  }

  return (
    <div className="App">
      {error && <Error closeError={closeError}/>}
      <header>
        <img src={dice} />
        <h1>Boardgame {bWord}</h1>
      </header>
      <nav>
        <NavLink to='/'><button>Top 100</button></NavLink>
        <NavLink to='/favorites'><button>Favorites</button></NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Top100 top100={top100} toggleFav={toggleFavorite}/>} />
        <Route path="/favorites" element={<Favorites top100={top100} toggleFav={toggleFavorite} />} />
        <Route path="/details/:id" element={<Details top100={top100} updateError={updateError}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
