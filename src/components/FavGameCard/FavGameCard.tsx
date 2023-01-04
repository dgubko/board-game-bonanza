import { Link } from 'react-router-dom';
import { BsSuitHeartFill } from 'react-icons/bs'
import './FavGameCard.css';


interface Props {
    id: string;
    image: string;
    name: string;
    rating: number;
    toggleFav: (id: string) => void;
}

const FavGameCard = ({ id, image, name, rating, toggleFav }: Props) => {

    return (
        <div>
            <Link to={'/details/' + id}>
                <div>
                    <img src={image}></img>
                    <div>
                        <p>{name}</p>
                        <p>{rating}</p>

                    </div>
                </div>
            </Link>
            <div onClick={() => toggleFav(id)} className='heart'>
                <BsSuitHeartFill className="heart" />
            </div>
        </div>
    )
}

export default FavGameCard