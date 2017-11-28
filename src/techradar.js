import React, { Component } from 'react';
import ConcentrikCircle from './concentrikCircle.js';



class TechRadar extends Component {

	constructor(props){
		super(props);

		this.canvas = this.refs["techradar"];
		this.svgWidth = 400;
		this.svgHeight = 400;
		this.counterCircle = 0;
		this.renderCircleHTML = '';
		this.concentrikCircleColors = ["#BFC0BF", "#e4e5e4", "#d7d8d6", "#cbcccb"];
    	
	}

	componentDidMount(){
		//this.buildCanvas();
	}

	componentWillReceiveProps(nextProps){
		console.log('nextProps : ', nextProps);
	 	/*this.setState(nextProps.props, function(){
	 		// this.renderConcentrikCircle()
	 		// this.counterCircle(Object.keys(nextProps.props.length));
	 	}.bind(this));*/
	}

	shouldComponentUpdate(nextProps, nextState){
	    console.log('shouldComponentUpdate');
	    return this.props !== nextProps || this.state !== nextState;;
	 }

	componentWillUpdate(nextProps, nextState){
    	console.log('componentWillUpdate');	
  	}

	cerclePleinSVG(){
		/******************************************************************************/
		// SOLUTION SVG
		/******************************************************************************/

		// var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		// svg.id = "techradar-svg";
		// svg.setAttribute('width', '400');
		// svg.setAttribute('height', '400');
		// svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
		// document.querySelector('.App').appendChild(svg);

		/*
			// SOLUTION CERCLES PLEINS SVG
		
		var concentrikCircle = document.createElementNS('http://www.w3.org/2000/svg',"circle");  
		concentrikCircle.setAttribute('cx',0);
	    concentrikCircle.setAttribute('cy',0);
	    concentrikCircle.setAttribute('r',500);

	    var concentrikCircle2 = document.createElementNS('http://www.w3.org/2000/svg',"circle");  
		concentrikCircle2.setAttribute('cx',0);
	    concentrikCircle2.setAttribute('cy',0);
	    concentrikCircle2.setAttribute('r',400);

	    var concentrikCircle3 = document.createElementNS('http://www.w3.org/2000/svg',"circle");  
		concentrikCircle3.setAttribute('cx',0);
	    concentrikCircle3.setAttribute('cy',0);
	    concentrikCircle3.setAttribute('r',300);

	    var concentrikCircle4 = document.createElementNS('http://www.w3.org/2000/svg',"circle");  
		concentrikCircle4.setAttribute('cx',0);
	    concentrikCircle4.setAttribute('cy',0);
	    concentrikCircle4.setAttribute('r',200);
	    
	    concentrikCircle.setAttribute('fill','#bcf0bf');
	    concentrikCircle2.setAttribute('fill','#e4e5e4');
	    concentrikCircle3.setAttribute('fill','#d7d8d6');
	    concentrikCircle4.setAttribute('fill','#cbcccb');
		*/
	

		// solution path
		/*var concentrikCircle = document.createElementNS('http://www.w3.org/2000/svg',"path");  
		concentrikCircle.setAttribute('d','M187.5,0A187.5,187.5 0 0,1 1.1481063742006436e-14,187.5L0,0Z');
		concentrikCircle.setAttribute('fill','#BFC0BF');

		var concentrikCircle2 = document.createElementNS('http://www.w3.org/2000/svg',"path");  
		concentrikCircle2.setAttribute('d','M343.75,0A343.75,343.75 0 0,1 2.1048616860345132e-14,343.75L1.1481063742006436e-14,187.5A187.5,187.5 0 0,0 187.5,0Z');
		concentrikCircle2.setAttribute('fill','#CBCCCB');

		var concentrikCircle3 = document.createElementNS('http://www.w3.org/2000/svg',"path");  
		concentrikCircle3.setAttribute('d','M437.5,0A437.5,437.5 0 0,1 2.678914873134835e-14,437.5L2.1048616860345132e-14,343.75A343.75,343.75 0 0,0 343.75,0Z');
		concentrikCircle3.setAttribute('fill','#D7D8D6');

		var concentrikCircle4 = document.createElementNS('http://www.w3.org/2000/svg',"path");  
		concentrikCircle4.setAttribute('d','M500,0A500,500 0 0,1 3.061616997868383e-14,500L2.678914873134835e-14,437.5A437.5,437.5 0 0,0 437.5,0Z');
		concentrikCircle4.setAttribute('fill','#E4E5E4');

		var techRadarSvg = document.getElementById("techradar-svg");
		techRadarSvg.appendChild(concentrikCircle);
		techRadarSvg.appendChild(concentrikCircle2);
		techRadarSvg.appendChild(concentrikCircle3);
		techRadarSvg.appendChild(concentrikCircle4);*/
	} 


	renderConcentrikCircle(){

		console.log('buildConcentrikCircle -- this.state : ', this.props.props);

		if ( Object.keys(this.props.props).length !== 0 ){
			this.counterCircle = Object.keys(this.props.props).length;

			var factor, d;
			var concentrikCircles = [];

			// <path d="M0 0 L 200 0, C 200 0 200 200 0 200 Z" fill="red" />
			// <path d="M0 0 L 100 0, C 100 0 100 100 0 100 Z" fill="grey" />

			while( this.counterCircle > 0 ){
				factor = this.counterCircle * 100;
				console.log('factor : ', factor);
				d = "M0 0 L " +factor+ " 0, C " +factor+ " 0 " +factor+ " " +factor+ " 0 " +factor+ " Z";
				// return <path d={d} fill={this.concentrikCircleColors[this.counterCircle]} />;
				concentrikCircles.push(<ConcentrikCircle d={d} fill={this.concentrikCircleColors[this.counterCircle-1]} />);
				this.counterCircle--;			
			}
		}

		return concentrikCircles;
		

		// while( this.counterCircle > 0 ){
		// 	factor = this.counterCircle * 100;
		// 	this.renderCircleHTML += '<path d="M0 0 L '+ factor +' 0, C '+ factor +' 0 '+ factor +' '+ factor +' 0 '+ factor +' Z fill="'+ this.concentrikCircleColors[this.counterCircle] +'" />'
		// 	this.counterCircle--;			
		// }
		
		

		// this.forceUpdate();

		// for ( var techno in this.state){

		// 	let pointer = this.state[techno];

		// 	console.log('pointer : ', pointer);

		// 	for (var i in pointer){
				
		// 	}
		// }


		// var newpath = document.createElementNS('http://www.w3.org/2000/svg',"path");  
		// newpath.setAttributeNS(null, "d", "M10 10");
		// document.getElementById("techradar-svg").appendChild(newpath);

	}

	buildCanvas(){
		console.log('buildCanvas');
		/******************************************************************************/
		// SOLUTION CANVAS
		/******************************************************************************/

		/*var canvas = document.getElementById('techradar');
		if(!canvas)
	    {
	        console.log("Impossible de récupérer le canvas");
	        
	    }

		var context = canvas.getContext('2d');
		if(!context)
        {
            console.log("Impossible de récupérer le context du canvas");
            return;
        }


         // dessin des cercles concentriques
		context.beginPath(); 
		context.fillStyle = "#bcf0bf"; 
		context.arc(0, 0, 500, 0, Math.PI*2); 
		context.fill(); 
		context.closePath();

		context.beginPath(); 
		context.fillStyle = "#e4e5e4"; 
		context.arc(0, 0, 400, 0, Math.PI*2); 
		context.fill(); 
		context.closePath();

		context.beginPath(); 
		context.fillStyle = "#d7d8d6"; 
		context.arc(0, 0, 300, 0, Math.PI*2); 
		context.fill(); 
		context.closePath();

		context.beginPath(); 
		context.fillStyle = "#cbcccb"; 
		context.arc(0, 0, 200, 0, Math.PI*2); 
		context.fill(); 
		context.closePath();
		*/
	}

	buildSVG(){
		for ( var techno in this.props){

			let pointer = this.props[techno];

			for (var i in pointer){
				/*var pointerEl = document.createElement('canvas');

				pointerEl.id = 'pointer_' + pointer[i].name;
				pointerEl.width = 500;
				pointerEl.height = 500;

				document.getElementById('techradar').appendChild(pointerEl);

				var contextPointer = pointerEl.getContext('2d');
				contextPointer.beginPath(); 
				contextPointer.fillStyle = "#ff0000";
				contextPointer.strokeStyle = "#ff0000";
				contextPointer.moveTo(300, 300);//On se déplace au coin inférieur gauche
				contextPointer.lineTo(150, 0);
				contextPointer.lineTo(300, 300);
				contextPointer.lineTo(0, 300);
				contextPointer.fill();
				contextPointer.closePath();*/

				// var newpath = document.createElementNS('http://www.w3.org/2000/svg',"path");  
				// newpath.setAttributeNS(null, "d", "M10 10");
				// document.getElementById("techradar-svg").appendChild(newpath);
				
				var circle = document.createElementNS('http://www.w3.org/2000/svg',"circle");  
				// circle.setAttributeNS(null, "d", "M10 10");
				circle.setAttribute('cx',0);
			    circle.setAttribute('cy',100);
			    circle.setAttribute('r',10);
			    
			    circle.setAttribute('fill','#95B3D7');
				document.getElementById("techradar-svg").appendChild(circle);
				

			}

			console.log(this.props[i]);
		}
	}

	render(){
		return (
			<svg id="techradar-svg" width={this.svgWidth} height={this.svgHeight}>
					{this.renderConcentrikCircle()}
			</svg>
		); 
	}
}

export default TechRadar;