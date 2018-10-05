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
let Book= ({title}) =>{
  return(
    <div className="answer">
      <h1>{title}</h1>
    </div>
  )
}
function Turn ({author, books}){
  return(
    <div className='row turn' style={{ backgroundColor: "white"}}>
    <div className='col-4 offset-1'>
      <img src={author.imageUrl} className='authorimage' alt='Author' />
    </div>
    <div className='col-6'>
      {books.map((title)=> <Book title={title} key={title} />)}
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
function Events(props){
  const onClickHandler =(e) => {
  //  e.persist();
    console.log(e)
    
 
    //console.log(synthEvent)

  }

  return(
    // <button onClick={onClickHandler} value="Make an event">Make an event</button>
    <input type='checkbox' onClick={(e)=>{}}></input>
  )
}

 function AuthorQuiz ({turnData}) {  
 
    return (

      <div className="container-fluid">
        <Hero />
        <Turn {...turnData} />
        <Continue />
        <Footer />
        <Events />      
      
      </div>
 
    );
  
}

 export default AuthorQuiz;
