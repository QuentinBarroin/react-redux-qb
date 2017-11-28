import React, { Component } from 'react';
import {getRandomArbitrary} from './utils/utils';



class ConcentrikCircle extends Component {
	constructor(props){
		super(props);


	}

	componentWillMount(){
		console.log('ConcentrikCircle -- componentWillMount');
	}

	// pour le premier cx ne doit pas dépasser 
	getCoord(rayon){

		var coord = { x : 0, y : 0};

		coord.x = getRandomArbitrary(0, rayon);

		if ( coord.x >= rayon/2 ){
			coord.y = getRandomArbitrary(0, coord.x); 
		}

		console.log('x : ', coord.x);
		console.log('y : ', coord.y);


		return coord;
	}

	renderPointer(){
		var pointers = [];
		var that = this;
		
		this.props.pointers.map(returnPointer);

		function returnPointer(pointer){
			var coord = that.getCoord(that.props.rayon);
			pointers.push(
				<a>
					<circle key={pointer.name} ref={pointer.name} cx={coord.x} cy={coord.y} r="5" />
				</a>)
		}

		return pointers;
	}

	render(){
		return (
			<g>
			<path {...this.props}>
			</path>
			{this.renderPointer()}
			</g>
		);
	}
}

export default ConcentrikCircle;