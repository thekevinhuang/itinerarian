
function pointReducer (state = [], action) {
    switch (action.type) {
        case "ADD_POINT":
            const point = action.point
            return [...state, point]
        default:
            return state
    }
}

export default pointReducer