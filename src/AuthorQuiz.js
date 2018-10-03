import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';

let Hero = () => {
  return(
    <div className="row">
      <div className="jumbotron col-10 offset-1">

        <h1>Author Quiz</h1>
        <p>select the book written by the autor shown</p>

      </div>

    
    </div>
  )
}
let Turn = ({authors, books}) =>{
  return(
    <div className='row turn' style={{ backgroundColor: "white"}}>
    <div className='col-4 offset-1'>
      <img src={authors.imageUrl} className='authorimage' alt='Author' />
    </div>
    <div className='col-6'>
      {books.map((titel)=> <p>{title}</p>)}
    </div>

    </div>
  );
}

let Continue = ()=>{
  return(
    <div></div>
  );
}
let Footer = () =>{
  return(
    <div className='row' id='footer'>
      <div className='col-12'>
        <p className='text-muted credit'>
        All images are from <a href='http://commons.wikimedia.org/wiki'>Wiki Media
        </a>
        </p>
      
      </div>
    </div>
  )

}

class AuthorQuiz extends Component {  
  render() {
    return (
    <React.Fragment>
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
        <Footer />

        
      
      </div>
    </React.Fragment>
    );
  }
}

export default AuthorQuiz;
