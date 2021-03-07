import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
   // debugger
    //const { restaurant } = this.props.restaurant;
    return (
      <div>
        <li key={this.props.restaurant.id}>
          {this.props.restaurant.text}
          <button
            onClick={this.handleOnClick}
          > X </button>
          <ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
