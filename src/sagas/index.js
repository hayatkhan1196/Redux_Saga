import {all} from 'redux-saga/effects';
import {myCounter} from './counter';

export default function* rootSaga() {
  yield all([myCounter()]);
}
