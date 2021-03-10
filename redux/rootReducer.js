import {combineReducers} from "redux";
import usersReducer from './usersSlice'
import roomsReducer from './usersSlice'

export default combineReducers({
	usersReducer,
	roomsReducer
});