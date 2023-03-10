import { Link } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import "./FavGameCard.css";

interface Props {
  id: string;
  image: string;
  name: string;
  rating: number;
  isFavorited: boolean;
  toggleFav: (id: string) => void;
}

const FavGameCard = ({
  id,
  image,
  name,
  rating,
  isFavorited,
  toggleFav,
}: Props) => {
  return (
    <div className="fav-game-card-wrapper">
      <Link className="fav-game-card" to={"/details/" + id}>
        <div>
          <img id="fav-image" src={image} alt={"Vibrant boardgame cover of " + name}></img>
          <div className="name-and-rating">
            <p className="game-card-name">{name}</p>
            <p>⭐️{rating.toFixed(2)}</p>
          </div>
        </div>
      </Link>
      <button
        className="heart-container"
        onClick={() => toggleFav(id)}
        aria-label="heart favorite button"
      >
        <BsSuitHeartFill className={isFavorited ? "heart active" : "heart"} />
      </button>
    </div>
  );
};

export default FavGameCard;
