import {put, takeEvery} from 'redux-saga/effects';
import {INCREMENT_COUNTER_SUCCESS, INCREMENT_COUNTER_REQUEST} from '../types';

function* incrementCounter(action) {
  yield put({
    type: INCREMENT_COUNTER_SUCCESS,
    counter: action.counter,
    name: 'hayat',
  });
}

/*
   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
   Allows concurrent fetches of user.
 */
export function* myCounter() {
  yield takeEvery(INCREMENT_COUNTER_REQUEST, incrementCounter);
}
