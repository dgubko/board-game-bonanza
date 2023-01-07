import "../Top100/Top100.css";
import { CleanedGame } from "../../interfaces";
import GameCard from "../GameCard/GameCard";
import { Link } from "react-router-dom";
const rollingDice = require("../../images/rolling-dice.gif")

const Top100 = ({
  top100,
  toggleFav,
  isLoading
}: {
  top100: CleanedGame[];
  toggleFav: (id: string) => void;
  isLoading: boolean;
}) => {
  const gameList = top100.map((game) => {
    return <GameCard key={game.id} toggleFav={toggleFav} {...game} />;
  });
  return (
    <div>
      {isLoading && <div className="is-loading-wrapper">Loading...<img src={rollingDice} className="rolling-dice-img" alt="rolling dice loading icon."/></div>}
      <div className="all-card-container">{gameList}</div>;
    </div>
  )
};

export default Top100;
