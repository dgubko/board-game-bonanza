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

interface Deatails {
    name: string;
    rank: number;
    id: string;
    price: string;
    average_user_rating: number;
    num_user_ratings: number;
    description: string;
    players: string;
    officialUrl: string;
    playtime: string;
    image: string;
}

export const cleanDetails = (game: any) => {
    const details = game.games[0]
    const cleanDetail = {
        name: details.name,
        rank: details.rank,
        id: details.id,
        price: details.price,
        averageUserRating: details["average_user_rating"],
        numUserRatings: details["num_user_ratings"],
        description: details.description,
        players: details.players,
        officialUrl: details["official_url"],
        playtime: details.playtime,
        image: details["image_url"],
    }
    return cleanDetail;
}