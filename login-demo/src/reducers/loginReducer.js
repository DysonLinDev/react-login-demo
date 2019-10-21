import { combineReducers } from 'redux';

const prefix = action => `LOGIN: ${action}`;
const SUBMIT_REQUEST = prefix('SUBMIT_REQUEST');
const SUBMIT_SUCCESS = prefix('SUBMIT_SUCCESS');
const SUBMIT_FAILURE = prefix('SUBMIT_FAILURE');


export const types = {
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
  SUBMIT_FAILURE,
}

// TODO: move to folder /constants
export const REQUEST_EMPTY = 'REQUEST_EMPTY';
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_READY = 'REQUEST_READY';
export const REQUEST_ERROR = 'REQUEST_ERROR';

const INITIAL_STATE = {
  loadingStatus: REQUEST_EMPTY,
  error: undefined,
  username: undefined,
};

export const submit = ({
  username,
  password,
}) => ({
  type: SUBMIT_REQUEST,
  payload: {
    username,
    password,
  }
})

export const submitSuccessed = username => ({
  type: SUBMIT_SUCCESS,
  payload: {
    username,
  }
})

export const submitFailed = error => ({
  type: SUBMIT_FAILURE,
  payload: {
    error,
  }
})

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_REQUEST:
      return {
        ...state,
        loadingStatus: REQUEST_LOADING,
      }
    case SUBMIT_SUCCESS:
      return {
        ...state,
        loadingStatus: REQUEST_READY,
        username: action.payload.username,
      }
    case SUBMIT_FAILURE:
      return {
        ...state,
        loadingStatus: REQUEST_ERROR,
        error: action.payload.error,
      }
    default:
      return state
  }
};

// TODO: create a default reducer to export all reducers.
export default combineReducers({
  Login: LoginReducer,
});