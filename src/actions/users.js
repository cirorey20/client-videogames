import axios from 'axios';

export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const GET_USER = "GET_USER";
export const CLEAR_USERGAME = "CLEAR_USERGAME";
// export const DELETED_GAME_USER = "DELETED_GAME_USER";
 
export function auth(payload){
    const urlLog = `https://fast-plateau-08546.herokuapp.com/auth/login`;
   return async function(dispatch){
       try {   
            const rta = await axios.post(urlLog, payload)
            const log = rta.data;
            console.log(log)

            if( log.message === 'Unauthorized' ) {
                return
            } else {

                localStorage.setItem('token', log.token)
                localStorage.setItem('payload', log.payload.role)
                localStorage.setItem('id', log.payload.sub)
                return {
                    type: LOGIN_USER,
                    log
                }

            }
       } catch (error) {
           console.log(error)
       }
   }
}

export function register(payload){
    const urlLog = `https://fast-plateau-08546.herokuapp.com/users`;
   return async function(dispatch){
       try {   
            const rta = await axios.post(urlLog, payload)
            const log = rta.data;
            console.log(log)

            localStorage.setItem('token', log.token)
            localStorage.setItem('payload', log.payload.role)
            localStorage.setItem('id', log.payload.sub)
            return {
                type: REGISTER_USER,
                log
            }
       } catch (error) {
           console.log(error)
       }
   }
}
 
export function getUser(id){
    const urlUser = `https://fast-plateau-08546.herokuapp.com/users/`;
   return async function(dispatch){
       try {   
            const rta = await axios.get(urlUser+id)
            const user = rta.data;
            // console.log(user)
            return dispatch({
                type: GET_USER,
                payload: user
            }) 
       } catch (error) {
           console.log(error)
       }
   }
}

export function destroyGame(id, token) {
    const urlDeleted = `https://fast-plateau-08546.herokuapp.com/videogames/`;
    return async function(dispatch){
        try {
            await axios.delete(urlDeleted+id, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    }

}

export function uploadGame(id, payload, token) {
    const urlUpload = `https://fast-plateau-08546.herokuapp.com/videogames/`;
    return async function(dispatch){
        try {
            await axios.patch(urlUpload+id, payload, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log("ACTUALIZADO")
        } catch (error) {
            console.log(error)
        }
    }
}


export function clearData() {
    return {
        type: CLEAR_USERGAME,
        payload: []
    }
}