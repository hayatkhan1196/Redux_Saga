import React from 'react';
import {connect} from 'react-redux';
import {INCREMENT_COUNTER_REQUEST} from './types';
import './App.css';

function App({onAgeLatest, incrementCounter, counter}) {
  return (
    <div className="App">
      <div className="Age-label">
        your age: <span>{counter}</span>
        {/* latest age:<span>{latest_Age}</span> */}
      </div>
      <div className="button_up_down">
        <button className="btn_up" onClick={incrementCounter}>
          Age UP
        </button>
        <button className="btn_down" onClick={onAgeLatest}>
          Latest age
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});
const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () =>
    dispatch({type: INCREMENT_COUNTER_REQUEST, counter: 1}),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
