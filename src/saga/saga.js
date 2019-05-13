import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import callApi from '../api'

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export default helloSaga;