import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GameDetails, CleanDetails, CleanedGame } from "../../interfaces";
import { getDetails } from "../../apiCalls/games";
import { cleanDetails } from "../../utilities/utilities";
import { BsSuitHeartFill } from "react-icons/bs"
import './Details.css'
import '../Heart/Heart.css'


const Details = ({ details, top100, toggleFav }: { details?: GameDetails, top100: CleanedGame[], toggleFav: (id: string) => void }) => {
  const [gameInfo, setGameInfo] = useState<CleanDetails>(Object);
  const { id } = useParams();

  console.log('RIGHT HERE: ', top100[0])

  useEffect(() => {
    Promise.resolve(getDetails(id)).then((data) => {
      setGameInfo(cleanDetails(data, top100));
    });
  }, []);

  useEffect(() => {
    Promise.resolve(getDetails(id)).then((data) => {
      setGameInfo(cleanDetails(data, top100));
    });
  }, [top100]);

  return (
    < div >
      <h1></h1>
      <div className='large-font text-center'>
        <BsSuitHeartFill className={gameInfo.isFavorited ? 'heart active' : 'heart'} onClick={() => { toggleFav(gameInfo.id) }} />
      </div>
      <div>
        <img src={gameInfo.image}></img>
        <div>
          <h2>{gameInfo.name}</h2>
          <p>Rank: {gameInfo.rank}</p>
          <p>Avg user rating: {gameInfo.averageUserRating}</p>
          <p># of ratings: {gameInfo.numUserRatings}</p>
          <p>About: {gameInfo.description}</p>
          <p>Players: {gameInfo.players}</p>
          <p>Playtime: {gameInfo.playtime}</p>
          <p>Official site: {gameInfo.officialUrl}</p>
          <p>Price: ${gameInfo.price}</p>
        </div>
      </div>
    </div >
  );
};

export default Details;
