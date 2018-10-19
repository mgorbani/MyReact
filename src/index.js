import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom'
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
// import {shuffle, min, filter, sample,  map, first} from 'underscore';
import {shuffle, sample} from 'underscore';
import AddAuthorForm from './AddAuthorForm'



const authors = [
    {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Adventures of Huckleberry Finn']
    },
    {
      name: 'Joseph Conrad',
      imageUrl: 'images/authors/josephconrad.png',
      imageSource: 'Wikimedia Commons',
      books: ['Heart of Darkness']
    },
    {
      name: 'J.K. Rowling',
      imageUrl: 'images/authors/jkrowling.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Daniel Ogren',
      books: ['Harry Potter and the Sorcerers Stone']
    },
    {
      name: 'Stephen King',
      imageUrl: 'images/authors/stephenking.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Pinguino',
      books: ['The Shining', 'IT']
    },
    {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
      name: 'William Shakespeare',
      imageUrl: 'images/authors/williamshakespeare.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
  ];
let getTurnData =(authors) =>{
    const allBooks=authors.reduce(function (p, c, i){     
        return p.concat(c.books)
    }, []);   
    const fourRandomBooks= shuffle( allBooks).slice(0, 4);
    // console.log(filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; }));
    // console.log(map([[1, 2], [3, 4]], first));
    // console.log("sample: "+sample([1, 2, 3, 4, 5, 6], 3));   
    const answer=sample(fourRandomBooks);
    return {
        books: fourRandomBooks,
        author: authors.find((author)=>
        author.books.some((title)=>
        title===answer)
        )
    };
};

const state ={
    turnData:getTurnData(authors),
    hightlight: '',
    notAnnat: 'hej och hoj'
};

function onClickAnswer(val){
  const isCorrect= state.turnData.author.books.some((book)=> book === val);

  state.hightlight = isCorrect ? 'correct' : 'wrong';
 render();
}
function App(){
  return(
    <AuthorQuiz {...state} onClickAnswer={onClickAnswer} />


  )
}
function render(){
  ReactDOM.render(
   
 
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route exact path="/Add" component={AddAuthorForm} />
      </React.Fragment>
    </BrowserRouter>
  
  
  , document.getElementById('root'));

}

render();



registerServiceWorker();
