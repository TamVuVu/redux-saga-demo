import { combineReducers } from 'redux'


function todos(state = [], action) {
    switch (action.type) {
        case "LOG":
            return [...state, "log"]
        case "BB":
            return [...state, "bb"]
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp