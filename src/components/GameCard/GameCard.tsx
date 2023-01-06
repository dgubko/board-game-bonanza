import { CleanedGame } from "../../interfaces"
import './GameCard.css'
import { BsSuitHeartFill } from 'react-icons/bs'
import '../Heart/Heart.css'

const GameCard = ({gameInfo, toggleFav}: {gameInfo: CleanedGame, toggleFav:(id: string) => void}) => {

    console.log()
    return (
        <div className="gameCard-container">
            <p>Rank: #{gameInfo.rank}</p>
            <img src={gameInfo.image} />
            <h3>{gameInfo.name}</h3>
            <p>${gameInfo.price}</p>
            <p>{gameInfo.averageUserRating.toFixed(2)} / 5 ⭐️</p>
            <p>{gameInfo.numUserRatings} reviews</p>
            <div className='large-font text-center'>
                <BsSuitHeartFill className={gameInfo.isFavorited ? 'heart active' : 'heart'} onClick={() => toggleFav(gameInfo.id)}/>
            </div>
        </div>
    )
}

export default GameCard

//className={heartIconStatus ? 'heart active' : 'heart'}