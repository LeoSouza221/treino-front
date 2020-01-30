import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

function Header() {
    return (
        <>
            <main>
                <div class="background-image">
                    <img 
                        className="main-image"
                        src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        alt=""
                    >
                    </img>
                </div>
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
                                <form>
                                    <label></label>
                                    <input></input>
                                </form>
                            </div>
                            <div id="register-form" className="form-layout">
                                <form>
                                    <label></label>
                                    <input></input>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Header;
