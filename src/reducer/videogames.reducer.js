const {
    GET_VIDEOGAMES, 
    SEARCH_GAME,
    FILTER_BY_GENRES,
    FILTER_BY_CREATED,
    ORDER_BY_NAME,
    ORDER_BY_RATING,
    DETAILS_GAME,
    CREATED_GAME,
    GENRES_GAMES,
    CLEAR_DATA,
 } = require('../actions/videogames')


 const initialState = {
    videogames: [],
    getGames: [],
    all: [],
    game: [],
    genres: [],
 }

 export function videogameReducer(state = initialState, action) {
     
    if (action.type === GET_VIDEOGAMES) {
        return {
            ...state,
            videogames: action.payload,
            getGames: action.payload,
            all: action.payload,
        }
    }
    if( action.type === SEARCH_GAME ) {
        return {
            ...state,
            videogames: action.payload,
            getGames: action.payload
        }
    }
    if ( action.type === FILTER_BY_GENRES ) {   //FILTRO POR GENEROS
        const allGames = state.getGames;
        const statusGenres = action.payload === "All" ?
        state.all :
        allGames.filter(item => item.genres.find( el=> {
            return el === action.payload
        }))

        // console.log(state.videogames)
        let notGenres = [
            {
                name: "There are no games with this genre",
                img: "https://png.pngtree.com/png-vector/20210706/ourlarge/pngtree-no-result-search-icon-png-image_3563805.jpg",
            }
        ]
        let gns = statusGenres.length === 0 ? notGenres : statusGenres
        
        return {
            ...state,
            videogames: gns
        }
    }

    if( action.type === FILTER_BY_CREATED ) {  //FILTRO POR MIS GAMES O EXISTENTES
        const allGames = state.getGames;
        let gamesDb = allGames.filter(el => el.createdInDb);
        // console.log("ACA ESTOY ",gamesDb)
        let notCreated = [
            {
                name: "No games created",
                img: "https://png.pngtree.com/png-vector/20210706/ourlarge/pngtree-no-result-search-icon-png-image_3563805.jpg",
            }
        ]
        const createdFilter = action.payload === "created" ?
            gamesDb.length === 0 ? notCreated : gamesDb
        :
        allGames.filter(el => !el.createdInDb)

        return {
            ...state,
            videogames: createdFilter
        }
    }

    if(action.type === ORDER_BY_NAME) { //ORDENAMIENTO POR NOMBRE
        let sortedArr = action.payload === 'asc' ?
            state.videogames.sort(function (a, b) {
                if(a.name > b.name) {
                    return 1
                }
                if (b.name > a.name) {
                    return -1
                }
                return 0
            })
            :
            state.videogames.sort(function (a,b) {
                if(a.name > b.name) {
                    return -1
                }
                if (b.name > a.name) {
                    return 1
                }
                return 0
            })
        return {
            ...state,
            videogames: sortedArr
        }
    }

    if(action.type === ORDER_BY_RATING) { //ORDENAMIENTO POR RATING
        let sortedArr = action.payload === 'menor' ?
            state.videogames.sort(function (a, b) {
                if(a.rating > b.rating) {
                    return 1
                }
                if (b.rating > a.rating) {
                    return -1
                }
                return 0
            })
            :
            state.videogames.sort(function (a,b) {
                if(a.rating > b.rating) {
                    return -1
                }
                if (b.rating > a.rating) {
                    return 1
                }
                return 0
            })
        return {
            ...state,
            videogames: sortedArr
        }
    }

    if ( action.type === DETAILS_GAME ) {
        return {
            ...state,
            game: action.payload
        }

    }

    if ( action.type === CREATED_GAME ) { //AQUI CREO MI NUEVO GAME
        return {
            ...state
        }
    }

    if( action.type === GENRES_GAMES ) {
        return {
            ...state,
            genres: action.payload
        }
    }

    if ( action.type === CLEAR_DATA ) {
        return {
            ...state,
            game: action.payload
        }
    }
  
    return state
 }