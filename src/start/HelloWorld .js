import React from 'react';
import {render} from 'react-dom';


class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return <div>
      <p>Hello {this.props.name}: {this.state.count}!</p>
      <button onClick={this.handleClick.bind(this)}>
        Click Me
      </button>
    </div>;
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired,
  initialCount: React.PropTypes.number
};
HelloWorld.defaultProps = {
  name: "JavaScript",
  initialCount: 12
};

render(<HelloWorld />, document.getElementById("app"));

