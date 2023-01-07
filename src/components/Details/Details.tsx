import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GameDetails, CleanDetails, CleanedGame } from "../../interfaces";
import { getDetails } from "../../apiCalls/games";
import { cleanDetails } from "../../utilities/utilities";
import { BsSuitHeartFill } from "react-icons/bs";
import "./Details.css";
import "../Heart/Heart.css";
import Form from '../Form/Form'
import { Review } from '../../interfaces'
import Comments from '../Comments/Comments'
const rollingDice = require("../../images/rolling-dice.gif")

const Details = ({
  top100,
  updateError,
  toggleFav,
  addComment,
  deleteComment
}: {
  top100: CleanedGame[];
  updateError: () => void;
  toggleFav: (id: string) => void;
  addComment: (review: Review, id: string) => void;
  deleteComment: (commentId: number, id: string) => void;
}) => {
  const [gameInfo, setGameInfo] = useState<CleanDetails>(Object);
  const [isLoading, setisLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    Promise.resolve(getDetails(id))
      .then((data) => {
        setGameInfo(cleanDetails(data, top100));
        setisLoading(false)
      })
      .catch((response) => {
        console.log(response.status);
        updateError();
        setisLoading(false)
      });
  }, []);

  useEffect(() => {
    Promise.resolve(getDetails(id)).then((data) => {
      setGameInfo(cleanDetails(data, top100));
    });
  }, [top100]);

  return (
    <div>
      {isLoading && <div className="is-loading-wrapper">Loading...</div>}
      {!isLoading && <div className="details-and-comment-container">
        <div className="details-page-container">
          <img src={gameInfo.image}></img>
          <div className="details-description">
            <h2>{gameInfo.name}</h2>
            <p>Rank: {gameInfo.rank}</p>
            <p>Avg user rating: {gameInfo.averageUserRating}</p>
            <p># of ratings: {gameInfo.numUserRatings}</p>
            <p>About: {gameInfo.description}</p>
            <p>Players: {gameInfo.players}</p>
            <p>Playtime: {gameInfo.playtime}</p>
            <p>Official site: {gameInfo.officialUrl}</p>
            <p>Price: ${gameInfo.price}</p>
            <BsSuitHeartFill
              className={gameInfo.isFavorited ? "heart active" : "heart"}
              onClick={() => {
                toggleFav(gameInfo.id);
              }}
            />
          </div>
        </div>
        <Form addComment={addComment} id={gameInfo.id}/>
        <Comments id={gameInfo.id} deleteComment={deleteComment} comments={gameInfo.comments ? gameInfo.comments : []}/>
      </div>}
    </div>
  );
};

export default Details;
