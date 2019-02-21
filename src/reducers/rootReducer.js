import {combineReducers} from "redux"
import itineraryReducer from './itineraryReducer'
import dateReducer from './dateReducer'

const rootReducer = combineReducers({
    itineraries: itineraryReducer,
    dates: dateReducer
})

export default rootReducer