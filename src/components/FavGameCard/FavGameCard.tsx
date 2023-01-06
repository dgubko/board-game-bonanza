import { Link } from 'react-router-dom';
import { BsSuitHeartFill } from 'react-icons/bs'
import './FavGameCard.css';
import '../Heart/Heart.css'


interface Props {
    id: string;
    image: string;
    name: string;
    rating: number;
    isFavorited: boolean;
    toggleFav: (id: string) => void;
}

const FavGameCard = ({ id, image, name, rating, isFavorited, toggleFav }: Props) => {

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
            <div className='large-font text-center'>
                <BsSuitHeartFill className={isFavorited ? 'heart active' : 'heart'} onClick={() => toggleFav(id)}/>
            </div>
        </div>
    )
}

export default FavGameCard