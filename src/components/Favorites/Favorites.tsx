import "./Favorites.css";
import { CleanedGame } from "../../interfaces";
import FavGameCard from "../FavGameCard/FavGameCard";

const Favorites = ({top100, toggleFav}:{top100: CleanedGame[], toggleFav: (id: string) => void}) => {
    
    let favGameCards = top100.reduce((acc: JSX.Element[], game) => {
        if (game.isFavorited) {
            acc.push(<FavGameCard id={game.id} image={game.image} name={game.name} rating={game.averageUserRating} isFavorited={game.isFavorited} toggleFav={toggleFav}/>)
        }
        return acc;
    },[])

  return <div className="favorites">{favGameCards}</div>;
};

export default Favorites;
