import { CleanedGame } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import "./GameCard.css";
import { BsSuitHeartFill } from "react-icons/bs";

const GameCard = ({
  rank,
  id,
  image,
  name,
  price,
  averageUserRating,
  numUserRatings,
  isFavorited,
  toggleFav,
}: CleanedGame) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="gameCard-container">
      <button onClick={handleClick}>
        <div className="rank-number">
          <p>Rank: #{rank}</p>
        </div>
        <img src={image} />
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{averageUserRating.toFixed(2)} / 5 ⭐️</p>
        <p>{numUserRatings} reviews</p>
      </button>
      {toggleFav && (
        <button className="heart-container" onClick={() => toggleFav(id)}>
          <BsSuitHeartFill
            className={isFavorited ? "heart active" : "heart"}
          />
        </button>
      )}
    </div>
  );
};
export default GameCard;
