import * as types from '../actionTypes'
export const getAllUsers = (listUsers) => ({
    type: types.GET_ALL_USERS,
    listUsers
})
export const selectUserId = (userId) => ({
    type: types.SELECT_USER_ID,
    userId
})
export const delUser = (userId) => ({
    type: types.DELELE_USER,
    userId
})
export const selectUser = (user) => ({
    type: types.SELECT_USER,
    user
})
export const actAddUser = (user) => ({
    type: types.ADD_USER,
    user
})
export const selectUserToEdit = (user) => ({
    type: types.SELECT_USER_TO_EDIT,
    user
})
export const actEditUser = (user) => ({
    type: types.EDIT_USER,
    user
})