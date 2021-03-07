import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const restReviews = this.props.reviews.filter(review => review.restaurantId == this.props.restaurantId)


    debugger
    return (
      <ul>

        {restReviews ? restReviews.map(review => {
          return(
          (review.restaurantId == this.props.restaurantId) ? 
          <Review review={review} deleteReview={this.props.deleteReview}/> : ''
          
        
        )}): ''}
  
      </ul>
    );
  }
};

export default Reviews;