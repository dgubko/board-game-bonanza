import "./GameCard.css";
import { useNavigate } from "react-router-dom";
import { CleanedGame } from "../../interfaces";

const GameCard = ({
  name,
  price,
  rank,
  id,
  image,
  averageUserRating,
  numUserRatings,
}: CleanedGame) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="gameCard-container" onClick={handleClick}>
      <p>Rank: #{rank}</p>
      <img src={image} />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{averageUserRating.toFixed(2)} / 5 ⭐️</p>
      <p>{numUserRatings} reviews</p>
    </div>
  );
};

export default GameCard;
