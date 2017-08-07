import React, {Component} from 'react';
import {MDCTextfield, MDCTextfieldFoundation} from '@material/textfield/dist/mdc.textfield';

class BookForm extends Component {

    render() {
        return (
            <form action="#" id="book-input-form">
                <div>
                    <div className="mdc-form-field">
                        <div className="mdc-textfield" data-mdc-auto-init="MDCTextfield">
                            <input id="firstname" type="text" className="mdc-textfield__input"></input>
                            <label htmlFor="firstname" className="mdc-textfield__label">
                                First Name
                            </label>
                        </div>
                    </div>

                    <div className="mdc-form-field">
                        <div className="mdc-textfield" data-mdc-auto-init="MDCTextfield">
                            <input id="lastname" type="text" className="mdc-textfield__input"></input>
                            <label htmlFor="lastname" className="mdc-textfield__label">
                                Last Name
                            </label>
                        </div>
                    </div>
                </div>

                <button type="submit"
                        className="mdc-button
                       mdc-button--raised
                       mdc-button--primary
                       mdc-ripple-surface">
                    Print Greeting
                </button>
            </form>

        );
    }
}


export default BookForm;
