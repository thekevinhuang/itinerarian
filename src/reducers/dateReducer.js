import uuid from 'uuid'

function dateReducer (state = [], action) {
    switch (action.type) {
        case "ADD_DATE":
            let date = action.date
            date.id = uuid()
            return [...state, date]
        default:
            return state
    }
}

export default dateReducer