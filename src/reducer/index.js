import { combineReducers } from 'redux';

import {videogameReducer} from './videogames.reducer';
import {userReducer} from './user.reducer';
 
 const rootReducer = combineReducers({
    videogameReducer,
    userReducer,
 })
  
 export default rootReducer