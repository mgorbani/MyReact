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
let Book= ({title, onClick}) =>{
  return(
    <div className="answer" onClick={()=>{onClick(title);}}>
      <h1>{title}</h1>
    </div>
  )
}

function Turn ({author, books, hightlight, onClickAnswer}){
  
  function hitghtlightToBGColor(hightlight){

    const mapping={
      'none': '',
      'correct': 'green',
      'wrong': 'red'      
    }
    return mapping[hightlight];
  }

  return(
    <div className='row turn' style={{ backgroundColor: hitghtlightToBGColor(hightlight)}}>
    <div className='col-4 offset-1'>
      <img src={author.imageUrl} className='authorimage' alt='Author' />
    </div>
    <div className='col-6'>
      {books.map((title)=> <Book title={title} key={title} onClick={onClickAnswer} />)}
    </div>

    </div>
  );
}

let Continue = ()=>{
  return(
    <div></div>
  );
}
 function Footer(f) { 
   console.log(f.notAnnat)

  return(
    <div className='row' id='footer'>
      <div className='col-12'>
        <p className='text-muted credit'>
            All images are from <a href='http://commons.wikimedia.org/wiki'>Wiki Media </a>
        </p>
        <p>{f.notAnnat}</p>
      
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

 function AuthorQuiz ({turnData, hightlight, notAnnat, onClickAnswer}) {  
 
    return (

      <div className="container-fluid">
        <Hero />
        <Turn {...turnData} hightlight={hightlight} onClickAnswer={onClickAnswer}  />
        <Continue />
        <Footer notAnnat={notAnnat}/>
         
      
      </div>
 
    );
  
}

 export default AuthorQuiz;
