export const getTop100 = async () => {
    const url = "https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=100&client_id=NO0Fq8pQcF";
    const response = await fetch(url)
    if (response.status > 400) {
        throw response
    }
    return response.json()
}

export const getDetails = async (id: any) => {
    const url = `https://api.boardgameatlas.com/api/search?ids=${id}&client_id=NO0Fq8pQcF`
    const response = await fetch(url)
    if (response.status > 400) {
        throw response
    }
    return response.json()
}