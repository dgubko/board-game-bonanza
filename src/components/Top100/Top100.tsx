import "../Top100/Top100.css";
import { CleanedGame } from "../../interfaces";
import GameCard from "../GameCard/GameCard";
const rollingDice = require("../../images/rolling-dice.gif");

const Top100 = ({
  top100,
  toggleFav,
  isLoading,
}: {
  top100: CleanedGame[];
  toggleFav: (id: string) => void;
  isLoading: boolean;
}) => {
  const gameList = top100.map((game) => {
    return <GameCard key={game.id} toggleFav={toggleFav} {...game} />;
  });

  const displayMessage = () => {
    if (!gameList.length && !isLoading) {
      return (
        <div className="search-no-games">
          Sorry, there were no games that matched your search. Please try a
          different search.
        </div>
      );
    } else if (gameList.length && !isLoading) {
      return <div className="all-card-container">{gameList}</div>;
    } else {
      return null;
    }
  };

  return (
    <div>
      {isLoading && (
        <div className="is-loading-wrapper">
          Loading...
          <img
            src={rollingDice}
            className="rolling-dice-img"
            alt="animation of 6-sided die rolling into a dice pip"
          />
        </div>
      )}
      {displayMessage()}
    </div>
  );
};

export default Top100;
