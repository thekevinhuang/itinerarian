import uuid from 'uuid'

function itineraryReducer (state = [], action) {
    switch (action.type) {
        case "ADD_ITINERARY":
            const id = uuid();
            const itinerary = action.itinerary
            itinerary.id = id
            return [...state, itinerary]
        default:
            return state
    }
}

export default itineraryReducer