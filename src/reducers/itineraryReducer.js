
function itineraryReducer (state = [], action) {
    switch (action.type) {
        case "ADD_ITINERARY":
            const itinerary = action.itinerary
            return [...state, itinerary]
        default:
            return state
    }
}

export default itineraryReducer