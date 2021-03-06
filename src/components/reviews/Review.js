import React, { Component } from 'react';

class Review extends Component {

  render() {
    //const { review } = this.props;
    const handleOnClick = () => {
      this.props.deleteReview(this.props.review.id)
    }

    return (
      <div>
        <li key={this.props.review.id}>
          {this.props.review.text}
        </li>
        <button
        onClick={this.handleOnClick}
        > X </button>
      </div>
    );
  }

};

export default Review;
