import { CleanedGame } from "../../interfaces"
import './GameCard.css'
import { BsSuitHeartFill } from 'react-icons/bs'

const GameCard = ({gameInfo, toggleFav}: {gameInfo: CleanedGame, toggleFav:(id: string) => void}) => {
    return (
        <div className="gameCard-container">
            <p>Rank: #{gameInfo.rank}</p>
            <img src={gameInfo.image} />
            <h3>{gameInfo.name}</h3>
            <p>${gameInfo.price}</p>
            <p>{gameInfo.averageUserRating.toFixed(2)} / 5 ⭐️</p>
            <p>{gameInfo.numUserRatings} reviews</p>
            <div className='large-font text-center' onClick={() => toggleFav(gameInfo.id)}>
                <BsSuitHeartFill className="heart" />
            </div>
        </div>
    )
}

export default GameCard