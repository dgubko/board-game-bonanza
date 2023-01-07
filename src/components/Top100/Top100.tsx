import "../Top100/Top100.css";
import { CleanedGame } from "../../interfaces";
import GameCard from "../GameCard/GameCard";
import { Link } from "react-router-dom";

const Top100 = ({top100, toggleFav}:{top100: CleanedGame[], toggleFav: (id: string) => void}) => {

    const gameList = top100.map(game => {
        const gameInfo = {
            name: game.name,
            price: game.price,
            rank: game.rank,
            id: game.id,
            key: game.id,
            image: game.image,
            averageUserRating: game.averageUserRating,
            numUserRatings: game.numUserRatings,
            isFavorited: game.isFavorited,
        }
        return (
            <GameCard 
            gameInfo={gameInfo}
            toggleFav={toggleFav}
            />
        )
        return <div className="all-card-container">{gameList}</div>;
    })

export default Top100;
