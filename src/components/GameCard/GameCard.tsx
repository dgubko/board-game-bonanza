import { CleanedGame } from "../../interfaces"

const GameCard = ({ name, price, rank, id, image, averageUserRating, numUserRatings }: CleanedGame) => {
    return (
        <div>
            <img src={image}/>
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{averageUserRating.toFixed(2)} / 5</p>
            <p>{numUserRatings} reviews</p>
            <p>Rank: #{rank}</p>
        </div>
    )
}

export default GameCard