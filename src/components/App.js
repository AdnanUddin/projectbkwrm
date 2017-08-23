import React, {Component} from 'react';
import logo from '../img/logo.svg';
import Navbar from './Navbar'
import Main from './Main'

import BookForm from "./BookForm";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Main />
            </div>
        )
    };
}

export default App;
