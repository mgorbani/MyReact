import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
/*
import AuthorQuiz from './AuthorQuiz';

// import {shuffle, min, filter, sample,  map, first} from 'underscore';
import {shuffle, sample} from 'underscore';

// const authors=
// [
//     {
//         name: 'Mark Twain',
//         imageUrl: 'images/authors/marktwain.jpg',
//         imageSource: 'Winkimedia Commons',
//         books: [
//             'The Adventures of Hukerberry Finn',
//             'Life on the Mississipi',
//             'Roughing It'
//         ]
//     }
// ];

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

    }
}
const state ={
    turnData:getTurnData(authors) 
}

class Reloader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
    this.onChar = this.onChar.bind(this);
    this.onGoTime = this.onGoTime.bind(this);
    this.myClick=this.myClick.bind(this);
  }
  onChar(event) {
    this.setState({ content: event.target.value });
  }
  onGoTime(event) {
    if (this.state.content !== "reload") {
      event.preventDefault();
    }
  }
  myClick(){
    console.log('mycklai ');

  }
  render() {
    return (
      <form onSubmit={this.onGoTime}>
        <input type="text" value={this.state.content} onChange={this.onChar} />
        <input type="submit" value="Go Time" />
        <button onClick={this.myClick}>click me</button>
      </form>);  
  }  
}

// ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));
ReactDOM.render(<Reloader />,
  document.getElementById('root')
);

*/

class EvenCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {clicks: 0};
      this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(event) {
      const clicksNew = this.state.clicks + 1;
      this.setState({clicks: clicksNew});
      if (clicksNew % 2 === 0) {
        this.props.onEvenClick(clicksNew);
      }
    }
    
    render() {
      return <div onClick={this.clickHandler}>
          This div has been clicked {this.state.clicks} times.
        </div>;
    }
  }
  
  ReactDOM.render(<EvenCounter onEvenClick={(data)=> {console.log(`even ${data}`);}} />,
    document.getElementById('root')
  );
  
registerServiceWorker();
