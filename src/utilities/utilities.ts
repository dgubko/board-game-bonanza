import { Game, GameDetails, CleanedGame } from '../interfaces';

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
            isFavorited: false,
            comments: []
        }
    })
    return cleanList;
}

export const cleanDetails = (game: {games: GameDetails[]}, top100: CleanedGame[]) => {
    const details = game.games[0]
    const currentGame: CleanedGame | undefined = top100.find(game => game.id === details.id)
    const cleanDetail = {
        name: details.name,
        rank: details.rank,
        id: details.id,
        price: details.price,
        averageUserRating: +details["average_user_rating"].toFixed(2),
        numUserRatings: details["num_user_ratings"],
        description: details["description_preview"],
        players: details.players,
        officialUrl: details["official_url"],
        playtime: details.playtime,
        image: details["image_url"],
        isFavorited: currentGame ? currentGame.isFavorited : false,
        comments: currentGame ? currentGame.comments : []
    }
    return cleanDetail;
}

export const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)]
}


export const words = [
    'Badass',
    'Backbone',
    'Balance',
    'Banter',
    'Barbecue',
    'Baptism',
    'Beacon',
    'Beatitude',
    'Beginning',
    'Believer',
    'Brightness',
    'Brilliant',
    'Balls',
    'Benchmark',
    'Being',
    'Beneficiary',
    'Benefit',
    'Bestower',
    'Biennial',
    'Blazing',
    'Blitheness',
    'Blossoming',
    'Burgeon',
    'Bubbly',
    'Brass',
    'Bounty',
    'Breeze',
    'Best',
    'Booster',
    'Bonanza',
    'Boldness',
    'Blossom',
    'Bunkup',
    'Bushido',
    'Baalist',
    'Babassu',
    'Babbitt',
    'Babbler',
    'Babyhood',
    'Babyism',
    'Bacchante',
    'Bachelor',
    'Backrest',
    'Badge',
    'Babery',
    'Babe',
    'Baboo',
    'Babyface',
    'Bacilli',
    'Backboard',
    'Backbite',
    'Backhand',
    'Backlog',
    'Backpack',
    'Baalite',
    'Baba',
    'Babel',
    'Baboon',
    'Backbeat',
    'Backbend',
    'Backing',
    'Backlash',
    'Backlighted',
    'Baggage',
    'Bibliology',
    'Bhutani',
    'Bilimbing',
    'Bilharzia',
    'Biopsy',
    'Bison',
    'Black',
    'Blackfin',
    'Blackheart',
    'Blasting',
    'Blastopore',
    'Blubber',
    'Boarder',
    'Boann',
    'Board',
    'Boarhound',
    'Bread',
    'Bubbles',
    'Baulk',
    'Billet',
    'Beeper',
    'Busbar',
    'Bootes',
    'Bathrobe',
    'Briquet',
    'Bowstring',
    'Bowtie',
    'Boudoir',
    'Boucle',
    'Bootee',
    'Birthplace',
    'Berkshire',
    'Brink',
    'Beantown',
    'Bearing',
    'Berlin',
    'Belgium',
    'Bordeaux',
    'Belgique',
    'Bale',
    'Bowels',
    'Brow',
    'Bayrut',
    'Barstow',
    'Bayonne',
    'Bisayas',
    'Bihar',
    'Bikini',
    'Burg',
    'Brescia',
    'Brisbane',
    'Burgh',
    'Bamako',
    'Barrio',
    'Blueberries',
    'Bocconcini',
    'Barberry',
    'Bacon',
    'Broccoli',
    'Bayberry',
    'Binjai',
    'Boldo',
    'Bolwarra',
    'Bilimbi',
    'Brisket',
    'Beetroots',
    'Bibliograph',
    'Bibliolatry',
    'Bilingualism',
    'Bibliopegy',
    'Biophysicist',
    'Blaberus',
    'Bisque',
    'Blackberry',
    'Blackbird',
    'Blackener',
    'Blackhead',
    'Blatteration',
    'Blaubok',
    'Blastoff',
    'Blazoner',
    'Blowup',
    'Bleacher',
    'Blockade',
    'Blaze',
    'Bowstringing',
    'Boxfish',
    'Boxwood',
    'Buck'
]