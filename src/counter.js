import React, { Component } from 'react';

class Counter extends Component {

	constructor(props) {
    	super(props);
    	this.state = {counter: 0};
  	}

  	handleClickToIncrementCounter(e){
  		e.preventDefault();
  		console.log('handleClickToIncrementCounter');
  		this.setState({ counter : this.state.counter+1 });
  	}

  	render() {
    	return (
      	<div className="counter">
        	<div className="counter-content">
        		Ceci est un compteur : <span id="counter-number" ref="counter-number"> {this.state.counter}</span>
    			<div>
    				<button ref="counter-button" onClick={this.handleClickToIncrementCounter.bind(this)}>Click moi pour m'inscrémenter</button>
				</div>
        	</div>
      	</div>
    );
  }
}

export default Counter;