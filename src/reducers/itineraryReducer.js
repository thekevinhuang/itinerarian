const initialState= {
    name: '',
    description: '',
    days: []
}

function itineraryReducer (state = initialState, action) {
    switch (action.type) {
        case "ADD_ITINERARY":
            return state
        default:
            return state
    }
}

export default itineraryReducer