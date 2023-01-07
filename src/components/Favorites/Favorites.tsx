import "./Favorites.css";
import { CleanedGame } from "../../interfaces";
import FavGameCard from "../FavGameCard/FavGameCard";

const Favorites = ({
  top100,
  toggleFav,
}: {
  top100: CleanedGame[];
  toggleFav: (id: string) => void;
}) => {
  let favGameCards = top100.reduce((acc: JSX.Element[], game) => {
    if (game.isFavorited) {
      acc.push(
        <FavGameCard
          key={game.id}
          id={game.id}
          image={game.image}
          name={game.name}
          rating={game.averageUserRating}
          isFavorited={game.isFavorited}
          toggleFav={toggleFav}
        />
      );
    }
    return acc;
  }, []);

  return (
    <div className="fav-wrapper">
    {favGameCards.length === 0 && <h1 className="no-fav-message">You currently have no favorite games. Go and favorite some cool games!</h1>}
    <div className="favorites">{favGameCards}</div>
  </div>
  ) 
};

export default Favorites;
