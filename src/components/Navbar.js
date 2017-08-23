import React, { Component } from 'react';
import {MDCToolbar, MDCToolbarFoundation} from '@material/toolbar';
import { Link } from 'react-router-dom'


class Navbar extends Component {


    render() {
        return (
            <header className="mdc-toolbar ">
              <div className="mdc-toolbar__row">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                  <span className="mdc-toolbar__title">
                      <Link to='/' className="link">
                          BookWRM
                      </Link>
                  </span>
                </section>
                <section className="mdc-toolbar__section mdc-toolbar__section--align-end mdc-toolbar__section--shrink-to-fit">
                  <a className="material-icons mdc-toolbar__icon search align-icons" aria-label="Search" alt="Search">search</a>
                </section>
              </div>
            </header>
        );
    }
}


export default Navbar;
