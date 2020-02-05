import React from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';

import FormText from '../FormTextComponent';

function Register() {
    let history = useHistory();
    
    function logar() {
        history.push('/treino/1')
    }

    return(
        <form onSubmit={logar}> 
            <FormText label="Email" type="text" className="login-space"/>
            <FormText label="Senha" type="password" className="login-space"/>
            <button type="submit" onClick={logar}>
                Entrar
            </button>
        </form>
    );
}

export default Register;
