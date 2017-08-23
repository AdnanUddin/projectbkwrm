import React, {Component} from 'react';
import '../css/App.css';
import '@material/layout-grid/dist/mdc.layout-grid.min.css'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <section id="app-logo">
                    <h2 className="mdc-typography--display4 center-text">Welcome to BOOKWRM</h2>
                    <button id="login-btn" type="submit"
                            className="mdc-button
                       mdc-button--raised
                       mdc-button--primary
                       mdc-ripple-surface">
                        <Link to='/login' className="link">
                            LOGIN
                        </Link>
                    </button>
                </section>

                <section>
                    <div id="feature1" className="mdc-layout-grid__inner">
                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--align-middle">
                            <h2 className="mdc-typography--display3"> Feature 1</h2>
                            <p className="mdc-typography--display1">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                                Proin id nisl ac nulla sollicitudin commodo. Cras ut mattis lacus, in fermentum felis.
                                Cras mattis vulputate dui, nec lacinia augue fringilla a.</p>
                        </div>
                    </div>

                    <div id="feature2" className="mdc-layout-grid__inner">
                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--align-middle">
                            <h2 className="mdc-typography--display3"> Feature 2</h2>
                            <p className="mdc-typography--display1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisl ac nulla
                                sollicitudin commodo. Cras ut mattis lacus, in fermentum felis. Cras mattis vulputate
                                dui, nec lacinia augue fringilla a.
                            </p>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;


