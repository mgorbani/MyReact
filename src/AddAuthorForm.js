
import React from 'react'
import  './AddAuthorForm.css'

class AuthorForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      imageUrl: '',
      bookTemp: '',
      books:[]
    }
    this.onFieldChange=this.onFieldChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this);
    this.addBook=this.addBook.bind(this)
  }
  onFieldChange(event)  {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onAddAuthor(this.state)
  }
  addBook(e){
    this.setState({
      books: this.state.books.concat([this.state.bookTemp]),
      bookTemp: ''      
    })   

  }
  render() {
    return (
     
          <form onSubmit={this.handleSubmit}>
            <div className="AddAuthorForm__input">
              <label htmlFor='name'>Name</label>
              <input type="text" onChange={this.onFieldChange} name='name' value={this.state.name}></input>
            </div>
            <div className="AddAuthorForm__input">
              <label htmlFor='imageUrl'>Image Url</label>
              <input type="text" name='imageUrl' onChange={this.onFieldChange} value={this.state.imageUrl}></input>
            </div>
            <div className="AddAuthorForm__input">
                {this.state.books.map((book)=> <p key={book}>{book}</p>)}
                <label htmlFor='bookTemp'>Book</label>
                <input type="text" name="bookTemp" onChange={this.onFieldChange}  value={this.state.bookTemp}></input>
                <button onClick={this.addBook}>+</button>
            </div>
            <input type="submit" value="Add" />
          </form>        
      
    )

  }
}

function AddAuthorForm({match, onAddAuthor}){
  return (
    <div className="AddAuthorForm">
      <h1>Add Author</h1>   
      <AuthorForm onAddAuthor={onAddAuthor}/>
    </div>
  )
}

export default AddAuthorForm 

