import { CleanedGame } from "../../interfaces";
import FavGameCard from "../FavGameCard/FavGameCard";

const Favorites = ({favGames, toggleFav}:{favGames: CleanedGame[], toggleFav: void}) => {
    
    let favGameCards = favGames.map(game => {
        return <FavGameCard id={game.id} image={game.image} name={game.name} rating={game.averageUserRating} toggleFav={toggleFav}/>
    })

    return(
        <div>
            {favGameCards}
        </div>
    )
}

export default Favorites