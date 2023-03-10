export interface Game {
    name: string;
    price: string;
    rank: number;
    id: string;
    thumb_url: string;
    average_user_rating: number;
    num_user_ratings: number;
}

export interface CleanedGame {
    name: string;
    price: string;
    rank: number;
    id: string;
    image: string;
    averageUserRating: number;
    numUserRatings: number;
    isFavorited: boolean;
    toggleFav?: (id: string) => void;
    comments?: Review[];
}

export interface GameDetails {
    name: string;
    rank: number;
    id: string;
    price: string;
    average_user_rating: number;
    num_user_ratings: number;
    description_preview: string;
    players: string;
    official_url: string;
    playtime: string;
    image_url: string;
}

export interface CleanDetails {
    name: string;
    price: string;
    rank: number;
    id: string;
    image: string;
    averageUserRating: number;
    numUserRatings: number;
    description: string;
    players: string;
    officialUrl: string;
    playtime: string;
    isFavorited: boolean;
    toggleFav?: (id: string) => void;
    comments?: Review[] | []
}

export interface Review {
    name: string;
    comment: string;
    commentId: number;
  }