import { CleanedGame } from "../../interfaces";
import FavGameCard from "../FavGameCard/FavGameCard";

const Favorites = ({favGames}:{favGames: CleanedGame[]}) => {
    
    let favGameCards = favGames.map(game => {
        return <FavGameCard image={game.image} name={game.name} rating={game.averageUserRating}/>
    })

    return(
        <div>
            {favGameCards}
        </div>
    )
}

export default Favorites