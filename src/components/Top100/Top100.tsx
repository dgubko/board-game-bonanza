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
            key={game.id}
            image={game.image}
            averageUserRating={game.averageUserRating}
            numUserRatings={game.numUserRatings}
            />
        )
    })
    return(
        <div>
            <nav>Top 100's
                <select name='view-menu'>
                    <option value='Top 100'>Top 100's</option>
                    <option value='Favorites'>Favorites</option>
                </select>
            </nav>
            {gameList}
        </div>
    )
}

export default Top100;