import {
  INCREMENT_COUNTER_SUCCESS,
  INCREMENT_COUNTER_FAILURE,
  INCREMENT_COUNTER_REQUEST,
} from '../types';

const initialState = {counter: 0};

export const counterReducer = (state = initialState, action) => {
  console.log(action);
  const newState = {...state};
  switch (action.type) {
    case INCREMENT_COUNTER_SUCCESS:
      newState.counter += action.counter;
  }
  return newState;
};
