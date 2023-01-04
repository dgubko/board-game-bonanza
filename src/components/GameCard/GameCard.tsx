import { CleanedGame } from "../../interfaces"
import './GameCard.css'

const GameCard = ({ name, price, rank, id, image, averageUserRating, numUserRatings }: CleanedGame) => {
    return (
        <div className="gameCard-container">
            <p>Rank: #{rank}</p>
            <img src={image} />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{averageUserRating.toFixed(2)} / 5 ⭐️</p>
            <p>{numUserRatings} reviews</p>
        </div>
    )
}

export default GameCard