import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GameDetails, CleanDetails, CleanedGame } from "../../interfaces";
import { getDetails } from "../../apiCalls/games";
import { cleanDetails } from "../../utilities/utilities";
import { BsSuitHeartFill } from "react-icons/bs"
import './Details.css'


const Details = ({ details, top100 }: { details?: GameDetails, top100: CleanedGame[] }) => {
  const [gameInfo, setGameInfo] = useState<CleanDetails>(Object);
  const [heartIconStatus, setHeartIconStatus] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    Promise.resolve(getDetails(id)).then((data) => {
      setGameInfo(cleanDetails(data, top100));
    });
  }, []);

  const toggleHeartStatus = (() => {
    setHeartIconStatus(!heartIconStatus)
  })

  return (
    <div>
      <h1></h1>
      <div className='large-font text-center'>
        <BsSuitHeartFill className={heartIconStatus ? 'heart active' : 'heart'} onClick={toggleHeartStatus} />
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
    </div>
  );
};

export default Details;
