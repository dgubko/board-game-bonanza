import { CleanedGame } from "../../interfaces";
import GameCard from "../GameCard/GameCard";

const Top100 = ({top100}:{top100: CleanedGame[]}) => {

    const gameList = top100.map(game => {
        return (
            <GameCard 
            name={game.name}
            price={game.price}
            rank={game.rank}
            id={game.id}
            image={game.image}
            averageUserRating={game.averageUserRating}
            numUserRatings={game.numUserRatings}
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