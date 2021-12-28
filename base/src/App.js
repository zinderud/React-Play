import logo from './logo.svg';
import './App.css';
import React from 'react'
import { MainPage } from './components/MainPage';
import { UseStatePage } from './components/UseStatePage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activePage: 'MainPage' };
  }
  handleChange = (activePage) => {
    this.setState({ activePage: activePage })
  }
  render() {
    const { activePage } = this.state;
    return (<div className="App">
      {activePage === 'MainPage' && <MainPage handlePageChange={this.handleChange} />}
      {activePage === 'UseStatePage' && <UseStatePage handlePageChange={this.handleChange} />}

    </div>
    );
  }

}


export default App;
