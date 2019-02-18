import {combineReducers} from "redux"
import itineraryReducer from './itineraryReducer'

const rootReducer = combineReducers({
    itineraries: itineraryReducer
})

export default rootReducer