import React, {Component} from 'react';
import logo from './img/logo.svg';
import Navbar from './Navbar'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>
          {/*<img src={logo}  alt="logo" />*/}
          <h2 className="mdc-typography--display4">Welcome to BOOKWRM</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
