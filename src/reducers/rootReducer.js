import {combineReducers} from "redux"
import itineraryReducer from './itineraryReducer'
import dateReducer from './dateReducer'
import pointReducer from './pointReducer'

const rootReducer = combineReducers({
    itineraries: itineraryReducer,
    dates: dateReducer,
    points: pointReducer
})

export default rootReducer