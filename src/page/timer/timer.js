 
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './timer.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// todo: sonra düzenle
import React, { Component } from 'react';

class App extends Component {

constructor(props)
{
	super(props);
	this.state={ date:{},opacity:1,offset:1 ,type:""}
}

		getInitialState () {
		return this.getDate();
	} 
	getDate () {
		var newdate = new Date();
		var date = {};

		date.hours = newdate.getHours();
		date.minutes = newdate.getMinutes();
		date.seconds = newdate.getSeconds();

		return date;
	} 
	updateDate () {
		this.setState(this.getDate());
	} 
	renderDate () {
		var secondOffset = (date.seconds / 60) * 100 + '%';
		var minuteOffset = (date.minutes / 60) * 100 + '%';
		var hourOffset = (date.hours / 24) * 100 + '%';

		var secondopacity = (date.seconds / 60 * 100) / 100;
		var minuteopacity = (date.minutes / 60 * 100) / 100;
		var houropacity = (date.hours / 24 * 100) / 100;
	}
	componentDidMount () {
		var that = this;
		setInterval(function() {
			that.updateDate();
		}, 1000);
	} 
	render() {
			return (
			<div className="App">
				<Marker type="hours" time={this.state.hours} />
				<Marker type="minutes" time={this.state.minutes} />
				<Marker type="seconds" time={this.state.seconds} />
				<div className="text-overlay">
					<Timer type="hours" time={this.state.hours} />
					<Timer type="minutes" time={this.state.minutes} />
					<Timer type="seconds" time={this.state.seconds} />
				</div>
			</div>
		);
	}
}

 

  
 class Marker extends Component {
	render () {
		switch (this.props.type) {
			case 'hours':
				var measurement = 24;
				break;
			case 'minutes':
				var measurement = 60;
				break;
			case 'seconds':
				var measurement = 60;
				break;
		}
		
		var offset = (this.props.time / measurement) * 100 + '%';
		var opacity = (this.props.time / measurement * 100) / 100;
		
		var columnClasses = 'Column Column--' + this.props.type;
		var typeClasses = 'Marker Marker--' + this.props.type;
		return (
			<div className={columnClasses}>
				<div className={typeClasses} style={{height: offset, opacity: opacity}}></div>
			</div>
		);
	}
 }
 
  
 class Timer extends Component {
	render () {
		if (this.props.time < 10) {
			var time = '0' + this.props.time;
		} else {
			var time = this.props.time;
		}
		return (
			<div className={this.props.type}>{time}</div>
		);
	}
 }
 
 
 
 

ReactDOM.render(
	<App />,
	document.getElementById("app")
);
