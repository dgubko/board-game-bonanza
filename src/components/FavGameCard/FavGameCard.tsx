import { Link } from 'react-router-dom';
import { BsSuitHeartFill } from 'react-icons/bs'


interface Props {
    id: string;
    image: string;
    name: string;
    rating: number;
    toggleFav: void;
}

const FavGameCard = ({id, image, name, rating, toggleFav}: Props) => {
    
    return(
        <Link to={'/details/' + id}>
            <div>
                <img src={image}></img>
                <div>
                    <p>{name}</p>
                    <p>{rating}</p>
                    <div onClick = {() => toggleFav(id)}className='large-font text-center'>
                        <BsSuitHeartFill className="heart" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default FavGameCard