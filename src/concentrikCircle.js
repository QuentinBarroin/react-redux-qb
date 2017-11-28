import React, { Component } from 'react';




class ConcentrikCircle extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
		// <path d={this.props.d} fill={this.props.fill} />
		<path {...this.props} />
		);
	}
}

export default ConcentrikCircle;