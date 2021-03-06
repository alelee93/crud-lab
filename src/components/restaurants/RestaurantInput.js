import React, { Component } from 'react';

class RestaurantInput extends Component {
  
  constructor(){
    super();
    this.state = {
      text: ''
    }

  }
  
  handleOnChange(event){
    this.setState = ({
      text: event.target.value
    })
  }
  

  render() {
    return (
      <div>
        <form>
          <input 
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            value={this.state.text}/>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
