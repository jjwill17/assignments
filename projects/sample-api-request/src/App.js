import React from 'react'
import CocktailList from './components/CocktailList'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ CocktailList } /> 
            </Switch>
        </div>
    );
};

export default App;
