import React from 'react'
import './styles.css'

import FormText from '../FormTextComponent';

function Register() {
    return(
        <form>
            <FormText label="Email" type="text" className="login-space"/>
            <FormText label="Senha" type="password" className="login-space"/>
            <button type="submit">
                Entrar
            </button>
        </form>
    );
}

export default Register;
