export const getTop100 = async () => {
    const url = "https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=100&client_id=NO0Fq8pQcF";
    const response = await fetch(url)
    if (!response.ok) {
        throw Error("Can't fetch games")
    }
    return response.json()
}