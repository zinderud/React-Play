import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './FourOhFour.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 

class App extends React.Component {
   
constructor(props)
{
	super(props);
	this.state={  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGBbRtzgNfNaHPP9X28Gj6OQF0l6ZaiqgxJlujX5QsE5g35Or18WijxY3'}
}
	render () {

 var imStyle = {
	  backgroundSize: 500,
  
    backgroundImage: 'url(' + this.props.image + ')' 
}
    var style = {   color: 'black',  fontSize: 200 , };

		return (
			<div className="FourOhFour">
				<div    style={{ backgroundImage:imStyle }}>
					<div style={style}> 404 </div>
				</div>
				 
			</div>
		);
	}
}

 

 
ReactDOM.render(
	<App />,
	document.getElementById("app")
);