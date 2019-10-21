import { all, takeLatest, put, call } from 'redux-saga/effects';

import {
  types,
  submitSuccessed,
  submitFailed,
} from '../reducers/loginReducer';

function* checkAuth({username, password}) {
  // mock data, TODO: use API
  try {
    const isValid = username === 'test123' && password === 'password';  
    if (!isValid) throw new Error();
  } catch (error) {
    throw Error(); 
  }
}

export function* loginFlow(action) {
  try {
    const {
      username,
      password
    } = action.payload;

    yield call(checkAuth, {username, password})
    yield put(submitSuccessed(username));
  } catch (error) {
    yield put(submitFailed(error));
  }
}

export default function* loginSaga() {
  yield all([
    takeLatest(types.SUBMIT_REQUEST, loginFlow),
  ]);
}
