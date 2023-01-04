import { Game, GameDetails } from '../interfaces'

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

export const cleanDetails = (game: {games: GameDetails[]}) => {
    console.log(game.games[0])
    const details = game.games[0]
    const cleanDetail = {
        name: details.name,
        rank: details.rank,
        id: details.id,
        price: details.price,
        averageUserRating: +details["average_user_rating"].toFixed(2),
        numUserRatings: details["num_user_ratings"],
        description: details.description.replace("<p>", "").replace("</p>", ""),
        players: details.players,
        officialUrl: details["official_url"],
        playtime: details.playtime,
        image: details["image_url"],
    }
    return cleanDetail;
}