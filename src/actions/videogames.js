import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const SEARCH_GAME = "SEARCH_GAME";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const DETAILS_GAME = "DETAILS_GAME";
export const CREATED_GAME = "CREATED_GAME";
export const GENRES_GAMES = "GENRES_GAMES";
export const CLEAR_DATA = "CLEAR_DATA";

const localHost = "http://localhost:3001"
// const localHost = "https://fast-plateau-08546.herokuapp.com"

export function getVideogames(){
   return function(dispatch){
    axios.get(localHost+'/videogames')
        .then((json)=>{
            return dispatch({
                type: GET_VIDEOGAMES,
                payload: json.data
            })
        }, (error)=>{
            console.log(error)
        })
   }
}

export function searchGame(name) {
    return async function(dispatch) {
        try {
            
            var json = await axios.get(localHost+`/videogames?name=${name}`, {
    
            })
            return dispatch({
                type: SEARCH_GAME,
                payload: json.data
            })

        } catch (error) {
            console.log(error)
        }
    }
}

//filter by genres
export function filterGenres(payload) {
    return {
        type: FILTER_BY_GENRES,
        payload
    }
}

//filter by created
export function filterCreated(payload) {
    return {
        type: FILTER_BY_CREATED,
        payload
    }
}

//order by name
export function orderName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

//order by rating
export function orderRating(payload) {
    return {
        type: ORDER_BY_RATING,
        payload
    }
}

//detail game
export function detailGame(id) {
    return async function(dispatch) {
        try {
            const detailById = await axios.get(localHost+`/videogame/${id}`,{

            });
            return dispatch({
                type: DETAILS_GAME,
                payload: detailById.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

//new game
export function newGame(payload, token) {
    return async function(dispatch) {
        try {
            
            const res = await axios.post(localHost+"/videogame", payload, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log(res);
            return {type: CREATED_GAME, 
                    res
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export function getGenres() {
    return async function(dispatch) {
        const genres = await axios.get(localHost+'/genres', {

        })
        return dispatch({
            type: GENRES_GAMES,
            payload: genres.data
        })
    }
}

export function clearData() {
    return {
        type: CLEAR_DATA,
        payload: []
    }
}