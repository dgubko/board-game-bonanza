import { CleanedGame } from "../../interfaces";
import GameCard from "../GameCard/GameCard";
import { Link } from 'react-router-dom';

const Top100 = ({top100}:{top100: CleanedGame[]}) => {

    const gameList = top100.map(game => {
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
            isFavorited={game.isFavorited}
            />
        )
    })

    return(
        <div>
            {gameList}
        </div>
    )
}

export default Top100;