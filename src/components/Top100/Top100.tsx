import { CleanedGame } from "../../interfaces";

const Top100 = ({top100}:{top100: CleanedGame[]}) => {

    const gameList = top100.map(game => {
        return (
            <p>{game.name}</p>
        )
    })
    return(
        <div>
            {gameList}
        </div>
    )
}

export default Top100;