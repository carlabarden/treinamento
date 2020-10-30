import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/product';

//BrowserRouter: permite que apenas uma rota seja chamada a cada vez
//Para receber parâmetros no react router dom>> :[nome parâmetro]
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />

        </Switch>
    </BrowserRouter>
);

export default Routes;