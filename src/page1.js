import React from 'react';
import {render} from 'react-dom';


    class Footer extends React.Component {
  render() {
    return (
      <footer>footer</footer>
    );
  }
}

 class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}

 class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Merhaba",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}

render(<Layout/>,document.getElementById("app"))