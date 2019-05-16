import { call, put, takeEvery, takeLatest, all, select } from 'redux-saga/effects'
import callApi, { getListUsers, deleteUser, addUser, editUser } from '../api'
import { getAllUsers, delUser, actAddUser, actEditUser } from '../actions'
import * as types from '../actionTypes/index'
import { NotificationManager } from 'react-notifications';

export function* getUsers() {
    try {
        const users = yield call(getListUsers)
        yield put(getAllUsers(users))
    }
    catch (err) {
        console.log(err)
    }
}
export function* addUserSaga() {
    try {
        const user = yield select(state => state.selectUser)
        yield call(addUser, user)
        NotificationManager.success("Add user succeed")
        yield put(actAddUser(user))
    }
    catch (err) {
        NotificationManager.error("Something went wrong")
    }
}
export function* editUserSaga() {
    try {
        const user = yield select(state => state.selectUser)
        yield call(editUser, user)
        NotificationManager.success("Edit user succeed")
        yield put(actEditUser(user))
    }
    catch (err) {
        console.log(err)
    }
}
export function* delUsers() {
    try {
        const id = yield select(state => state.selectUser)
        yield call(deleteUser, id)
        NotificationManager.success("Delete user succeed")
        yield put(delUser(id))
    }
    catch (err) {
        console.log(err)
    }
}
export default function* rootSaga() {
    yield all([
        getUsers(),
        takeEvery(types.SELECT_USER_ID, delUsers),
        takeEvery(types.SELECT_USER, addUserSaga),
        takeEvery(types.SELECT_USER_TO_EDIT, editUserSaga)
    ])
}