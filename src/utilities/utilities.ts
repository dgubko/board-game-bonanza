interface Game {
    name: string;
    price: string;
    rank: number;
    id: string;
    thumb_url: string;
    average_user_rating: number;
    num_user_ratings: number;
}

export const cleanTop100Data = (data: {games: Game[]}) => {
    const cleanList = data.games.map((game: Game) => {
        return {
            name: game.name,
            price: game.price,
            rank: game.rank,
            id: game.id,
            image: game["thumb_url"],
            averageUserRating: game["average_user_rating"],
            numUserRatings: game["num_user_ratings"],
        }
    })
    return cleanList;
}