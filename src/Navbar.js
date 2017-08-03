import React, { Component } from 'react';
import {MDCToolbar, MDCToolbarFoundation} from '@material/toolbar';

class Navbar extends Component {
  render() {
    return (
      <div className="mdc-toolbar">
        <div className="mdc-toolbar__row">
          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            <span className="mdc-toolbar__title">This is a super super super super long title</span>
          </section>
          <section className="mdc-toolbar__section mdc-toolbar__section--align-end mdc-toolbar__section--shrink-to-fit">
            <a className="material-icons search align-icons" aria-label="Search" alt="Search">search</a>
          </section>
        </div>
      </div>
    );
  }
}

export default Navbar;
