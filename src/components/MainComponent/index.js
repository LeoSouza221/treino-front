import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

import Register from '../RegisterComponent';
import Login from '../LoginComponent';

function Main() {
    return (
        <div className="form-content">
            <section>
                <header className="form-options">
                    <ul>
                        <li>
                            <a href="#login-form">
                                <h3>Login</h3>
                            </a>
                        </li>
                        <li>
                            <a href="#register-form">
                                <h3>Cadastro</h3>
                            </a>
                        </li>
                    </ul>
                </header>
                <div className="form-infos">
                    <div id="login-form" className="form-layout">
                        <Login/>
                    </div>
                    <div id="register-form" className="form-layout">
                        <Register/>  
                    </div>
                </div>
            </section>
        </div>   
    );
}

export default Main;
