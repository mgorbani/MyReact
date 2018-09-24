import React, { Component } from 'react';

import Counter from './Counter';

import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Sum(props) {
  return <h1>
    {props.a} + {props.b} = {props.a + props.b}
  </h1>  
}

class AuthorQuiz extends Component {
  
  render() {
    return (
    <React.Fragment>
      Author Quiz App
      <Sum a={'key'} b={6} />
      <Counter />
    </React.Fragment>
    );
  }
}

export default AuthorQuiz;
