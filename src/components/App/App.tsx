import React, { useEffect, useState } from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { getTop100, getDetails } from "../../apiCalls/games";
import { cleanTop100Data, cleanDetails } from "../../utilities/utilities";
import { Game, CleanedGame, GameDetails } from "../../interfaces";
import { promises } from "stream";
import Top100 from '../Top100/Top100';
import Favorites from '../Favorites/Favorites';
import Details from '../Details/Details';
import { getRandomWord } from '../../utilities/utilities'
const dice = require('../../images/dice.png')


function App() {
  const [top100, setTop100] = useState<CleanedGame[]>([])
  const [favGames, setFavGames] = useState<CleanedGame[]>([])
  const [bWord, setBWord] = useState<string>('Bonanza')

  useEffect(() => {
    Promise.resolve(getTop100()).then((data) => {
      setTop100(cleanTop100Data(data));
    })
    setBWord(getRandomWord())
  },[])


  // Promise.resolve(getDetails("TAAifFP590")).then((data) => {
  //   console.log(cleanDetails(data));
  // });

  return (
    <div className="App">
      <header>
        <img src={dice}/>
        <h1>Boardgame {bWord}</h1>
      </header>
      <nav>
        <NavLink to='/'><button>Top 100</button></NavLink>
        <NavLink to='/favorites'><button>Favorites</button></NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Top100 top100={top100}/>}/>
        <Route path='/favorites' element={<Favorites favGames={favGames}/>}/>
        <Route path='/details/:id' element={<Details />}/> 
      </Routes>
    </div>
  );
}

export default App;
