const {
    LOGIN_USER,
    GET_USER,
    CLEAR_USERGAME
    // DELETED_GAME_USER,
 } = require('../actions/users')


 const initialState = {
    userAuth: [],
    user: [],
    gamesUser: [],
    gameDeleted: [],
 }

 export function userReducer(state = initialState, action) {
     
    if (action.type === LOGIN_USER) {
        return {
            userAuth: action.payload
        }
    }
    if(action.type === GET_USER) {
        return {
            ...state,
            user: action.payload,
            gamesUser: action.payload.videogames.map((el)=>{
                return {
                    id: el.id,
                    name: el.name,
                    img: el.img,
                    description: el.description,
                    released: el.released,
                    rating: el.rating
                }
            })
        }
    }
    if ( action.type === CLEAR_USERGAME ) {
        return {
            ...state,
            gamesUser: []
        }
    }
  
    return state
 }