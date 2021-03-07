import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    const restId = this.props.restaurantId ? this.props.restaurantId : ''
    this.props.addReview(this.state.text, restId)
    this.setState({
      text: ''
    })
  }

  render() {
    //debugger
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}> 
          <input 
            type="text"
            onChange={this.handleOnChange}
            value={this.state.text}
            restaurantId={this.props.restaurantId ? this.props.restaurantId : ''}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
