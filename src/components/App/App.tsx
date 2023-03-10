import "./App.css";
import "../Heart/Heart.css";
import { useEffect, useState } from "react";
import { Route, NavLink, Routes, useLocation } from "react-router-dom";
import { getTop100 } from "../../apiCalls/games";
import { cleanTop100Data } from "../../utilities/utilities";
import { CleanedGame } from "../../interfaces";
import Top100 from "../Top100/Top100";
import Favorites from "../Favorites/Favorites";
import Details from "../Details/Details";
import { getRandomWord } from "../../utilities/utilities";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import Error from "../Error/Error";
import { Review } from "../../interfaces";
import { Search } from "../Search/Search";
const dice = require("../../images/dice.png");

function App() {
  const [top100, setTop100] = useState<CleanedGame[]>([]);
  const [bWord, setBWord] = useState<string>("Bonanza");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");
  const [clicked, setClicked] = useState<string>("top100");

  useEffect(() => {
    getTop100()
      .then((data) => {
        setTop100(cleanTop100Data(data));
        setisLoading(false);
      })
      .catch((response) => {
        console.log(response.status);
        setError(true);
        setisLoading(false);
      });
    setBWord(getRandomWord());
  }, []);

  const toggleFavorite = (id: string) => {
    const newGames = top100.map((game) => {
      if (game.id === id) {
        return {
          ...game,
          isFavorited: !game.isFavorited,
        };
      }
      return game;
    });
    setTop100(newGames);
  };

  const closeError = () => {
    setError(false);
  };

  const updateError = () => {
    setError(true);
  };

  const addComment = (review: Review, id: string) => {
    const newGames = top100.map((game) => {
      if (game.id === id) {
        game.comments?.push(review);
      }
      return game;
    });
    setTop100(newGames);
  };

  const deleteComment = (commentId: number, id: string) => {
    const newGames = top100.map((game) => {
      if (game.id === id) {
        const newComments = game.comments?.filter((comment) => {
          return comment.commentId !== commentId;
        });
        game.comments = newComments;
      }
      return game;
    });
    setTop100(newGames);
  };

  const filtered = top100.filter((game) => {
    return game.name.toLowerCase().includes(query.toLowerCase());
  });

  const { pathname } = useLocation();

  const clearClicked = () => {
    setClicked("");
  };

  return (
    <div className="App">
      {error && <Error closeError={closeError} />}
      <header>
        <img src={dice} alt="Icon of 6-sided die with dark blue or pink pips" />
        <h1 id="title">Board Game {bWord}</h1>
        {pathname === "/" ? (
          <Search query={query} setQuery={setQuery} />
        ) : (
          <div className="input-form" style={{ border: "none" }}></div>
        )}
      </header>
      <nav>
        <NavLink
          className={clicked === "top100" ? "button selected" : "button"}
          id="top100-button"
          to="/"
          onClick={() => setClicked("top100")}
        >
          Top 100
        </NavLink>
        <NavLink
          className={clicked === "favorites" ? "button selected" : "button"}
          id="fav-button"
          to="/favorites"
          onClick={() => setClicked("favorites")}
        >
          Favorites
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Top100
              top100={filtered}
              toggleFav={toggleFavorite}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites top100={top100} toggleFav={toggleFavorite} />}
        />
        <Route
          path="/details/:id"
          element={
            <Details
              top100={top100}
              toggleFav={toggleFavorite}
              updateError={updateError}
              addComment={addComment}
              deleteComment={deleteComment}
              clearClicked={clearClicked}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
