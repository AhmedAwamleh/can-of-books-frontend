import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    const response = await axios.get('http://localhost:3005/books');
    this.setState({
      books: response.data
    });
  };
  componentDidMount() {
    console.log('BestBooks componentDidMount');
    this.getBooks();
  }

  render() {



    return (
      <div>
        {this.state.books.length ?
          <Carousel fade variant="dark" style={{ width: '200%', height: '200%' }}>
            {this.state.books.map((book, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={book.image}
                  alt={book.title}
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}


          </Carousel> : <h3>Book Collection is Empty</h3>}
      </div>
    )
  }
}

export default BestBooks;