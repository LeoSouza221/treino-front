import React from 'react'
import './styles.css'

import FormText from '../FormTextComponent';

function Register() {
    return(
        <form>
            <FormText label="Nome" type="text" className="register-space"/>
            <FormText label="Email" type="text" className="register-space"/>
            <div className="input-group register-space">
                <FormText label="Senha" type="password"/>
                <FormText label="Confirme a senha" type="password" className="register-space"/>
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
    );
}

export default Register;
