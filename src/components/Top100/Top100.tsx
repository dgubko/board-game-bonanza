import "../Top100/Top100.css";
import { CleanedGame } from "../../interfaces";
import GameCard from "../GameCard/GameCard";
import { Link } from "react-router-dom";

const Top100 = ({
  top100,
  toggleFav,
}: {
  top100: CleanedGame[];
  toggleFav: (id: string) => void;
}) => {
  const gameList = top100.map((game) => {
    return <GameCard key={game.id} toggleFav={toggleFav} {...game} />;
  });
  return <div className="all-card-container">{gameList}</div>;
};

export default Top100;
