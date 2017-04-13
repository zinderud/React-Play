import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './sign.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 

export class Input extends React.Component {
    render() {
         return(
             <div className="Input">
                 <input id={this.props.name}
                 autoComplete="false"
                 required
                 type={this.props.type}
                 placeholder={this.props.placeholder}
                 />
                <label htmlFor={this.props.name} />
             </div>
         );
    }
}

 
  
export class Modal extends React.Component {
     render() {
         return (
             	<div className="Modal">
				<form 
					onSubmit={this.props.onSubmit}
					className="ModalForm">
					<Input
						id="name"
						type="text"
						placeholder="Muhammed Ikbal" />
					<Input
						id="username"
						type="email"
						placeholder="mokosam@gmail.com" />
					<Input
						id="password"
						type="password"
						placeholder="password" />
					<button>
						Log in <i className="fa fa-fw fa-chevron-right"></i>
					</button>
				</form>
			</div>
         );
     }
 }

 
 

 

export   class Sign extends React.Component {
      constructor(props) {
            super(props);
    this.state={mounted: false }
        }
    
    	getInitialState() {
		return { mounted: false };
	}
	
	componentDidMount () {
		this.setState({ mounted: true });
	}
	
	handleSubmit (e) {
		this.setState({ mounted: false });
		e.preventDefault();
	}
    render() {
        var child;
        if(this.state.mounted) {
			child = (<Modal onSubmit={this.handleSubmit} />);
		}
        return (
          	<div className="Sign">
				<ReactCSSTransitionGroup 
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
						{child}
				</ReactCSSTransitionGroup>
			</div>
        );
    }
}

 
 
 
ReactDOM.render(
  <Sign />,
  document.getElementById("app")
);
