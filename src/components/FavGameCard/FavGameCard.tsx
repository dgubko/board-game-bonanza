interface Props {
    image: string;
    name: string;
    rating: number;
}

const FavGameCard = ({image, name, rating}: Props) => {
    
    return(
        <div>
            <img src={image}></img>
            <div>
                <p>{name}</p>
                <p>{rating}</p>
            </div>
        </div>
    )
}

export default FavGameCard