import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from './Login/View/Login';
import { Top } from './Top/View/Top';
import { CommandContainer } from './Command/View/CommandContainer';

const App = () =>{

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" children={<Login />}></Route>
                <Route path="/top" children={<Top />}></Route>
                <Route patah="/command" children={<CommandContainer />}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;