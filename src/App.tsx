import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from './Login/View/Login';
import { Top } from './Top/View/Top';

const App = () =>{

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" children={<Login />}></Route>
                <Route children={<Top />}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;