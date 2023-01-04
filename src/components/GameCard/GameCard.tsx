import { CleanedGame } from "../../interfaces"

const GameCard = ({ name, price, rank, id, image, averageUserRating, numUserRatings }: CleanedGame) => {
    return (
        <div>
            <h3>{name}</h3>
        </div>
    )
}

export default GameCard