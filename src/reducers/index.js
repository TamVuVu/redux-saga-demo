import { combineReducers } from 'redux'
import * as types from '../actionTypes/index'
import { editElement } from '../api';

const initState = {
    selectedUser: "",
    listUsers: []
}
function users(state = initState.listUsers, action) {
    switch (action.type) {
        case types.GET_ALL_USERS:
            return [...state, ...action.listUsers]
        case types.ADD_USER:
            return [...state, action.user]
        case types.EDIT_USER:
            let newArr = [...state]
            return editElement(newArr,action.user)
        case types.DELELE_USER:
            return [...state.filter(i => i.id !== action.userId)]
        default:
            return state
    }
}
function selectUser(state = "", action) {
    switch (action.type) {
        case types.SELECT_USER_ID:
            return action.userId
        case types.SELECT_USER:
            return action.user
        case types.SELECT_USER_TO_EDIT:
            return action.user
        default:
            return state
    }
}


const reducer = combineReducers({
    users,
    selectUser
})

export default reducer