export const cleanTop100Data = (data: any) => {
    const cleanList = data.games.map((game: any) => {
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