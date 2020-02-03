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
                        src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
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
                                    <div className="input-block login-space">
                                        <label>Email</label>
                                        <input value="" type="text"></input>
                                    </div>
                                    <div className="input-block login-space">
                                        <label>Senha</label>
                                        <input value="" type="text"></input>
                                    </div>
                                    <button type="submit">
                                        Entrar
                                    </button>
                                </form>
                            </div>
                            <div id="register-form" className="form-layout">
                                <form>
                                    <div className="input-block register-space">
                                        <label>Nome</label>
                                        <input value="" type="text"></input>
                                    </div>
                                    <div className="input-block register-space">
                                        <label>Email</label>
                                        <input value="" type="text"></input>
                                    </div>
                                    <div className="input-group register-space">
                                        <div className="input-block">
                                            <label>Senha</label>
                                            <input value="" type="text"></input>
                                        </div>
                                        <div className="input-block">
                                            <label>Corfirme a senha</label>
                                            <input value="" type="text"></input>
                                        </div>
                                    </div>
                                    <fieldset>
                                        <legend>Tipo de Usuario</legend>
                                        <div className="input-group register-space">
                                            <div className="input-radio">
                                                <input type="radio" name="user_type" value="personal"/>
                                                <span>Personal</span> 
                                            </div>
                                            <div className="input-radio">
                                                <input type="radio" name="user_type" value="student"/>
                                                <span>Aluno</span> 
                                            </div>
                                        </div>
                                    </fieldset>
                                    <button type="submit">
                                        Enviar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="info">
                    <h3>
                        Um Titulo
                    </h3>
                    <p>
                        Xabalabala deregui jhonson skibidi relampalejendo tinarossauro aligenigena vridu tauba e sei que la e eh isso msm 
                    </p>
                </div>
            </main>
        </>
    );
}

export default Header;
