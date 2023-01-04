import { Link } from 'react-router-dom';

interface Props {
    id: string;
    image: string;
    name: string;
    rating: number;
}

const FavGameCard = ({id, image, name, rating}: Props) => {
    
    return(
        <Link to={'/details/' + id}>
            <div>
                <img src={image}></img>
                <div>
                    <p>{name}</p>
                    <p>{rating}</p>
                </div>
            </div>
        </Link>
    )
}

export default FavGameCard