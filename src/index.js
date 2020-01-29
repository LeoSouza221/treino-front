import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Perfil from './components/PerfilComponent';
import Treino from './components/TreinoComponent';
import Alunos from './components/AlunosComponent';
import Login from './components/LoginComponent';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/login" component={Login} />
            <Route path="/treino/:id" component={Treino} />
            <Route path="/perfil/:id" component={Perfil} />
            <Route path="/alunos/:id" component={Alunos} />
        </Switch>
    </ BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
