import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from './Component/Login/View/Login';
import { Top } from './Component/Top/View/Top';
import { CommandContainer } from './Component/Command/View/CommandContainer';

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