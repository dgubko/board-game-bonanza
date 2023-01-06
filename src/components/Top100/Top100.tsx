import "../Top100/Top100.css";
import { CleanedGame } from "../../interfaces";
import GameCard from "../GameCard/GameCard";
import { Link } from "react-router-dom";

const Top100 = ({ top100 }: { top100: CleanedGame[] }) => {
  const gameList = top100.map((game) => {
    return (
      <GameCard
        name={game.name}
        price={game.price}
        rank={game.rank}
        id={game.id}
        key={game.id}
        image={game.image}
        averageUserRating={game.averageUserRating}
        numUserRatings={game.numUserRatings}
      />
    );
  });

  return <div className="all-card-container">{gameList}</div>;
};

export default Top100;
