import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

    function App(props){
 
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{props.age}</span>
          </div>
        <div className='button_up_down'>
        <button className='btn_up' onClick={props.onAgeUp}>Age UP</button>
        <button className='btn_down' onClick={props.onAgeDown}>Age Down</button>
        </div>
      </div>
    );
  }


const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP_ASYNC", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);