import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    debugger
    return (
      <ul>

        {this.props.reviews ? this.props.reviews.map(review => {
          return(
          (review.restaurantId == this.props.restaurantId) ? <Review review={review} deleteReview={this.props.deleteReview}/> : ''
          
        
        )}): ''}
  
      </ul>
    );
  }
};

export default Reviews;