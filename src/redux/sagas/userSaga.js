import { call, put, takeEvery } from 'redux-saga/effects'
import * as type from '../../contants/types';

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

function* fetchUsers(action) {
    console.log("action", action);
    try {
        const users = yield call(getApi);
        console.log("users", users);
        yield put({ type: type.GET_USERS_SUCCESS, users: users });
    } catch (e) {
        yield put({ type: type.GET_USERS_FAILED, message: e.message });
    }
}

function* userSaga() {
    yield takeEvery(type.GET_USERS_REQUESTED, fetchUsers);
}

export default userSaga;