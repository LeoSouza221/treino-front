import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

function Header() {
    return (
        <header className="main-header">
            <div className="header-title">
                <h1 className="">Teste</h1>
            </div>
            <div className="drop-down">
                <FontAwesomeIcon icon="user" color="white" size="lg" />
                <ul className="menu-items">
                    <li>
                        <FontAwesomeIcon icon="info" color="white" size="1x" />
                        <h4>Perfil</h4>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="running" color="white" size="1x" />
                        <h4>Alunos</h4>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="dumbbell" color="white" size="1x" />
                        <h4>Meu Treino</h4>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
