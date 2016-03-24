import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './content';
import GameListContainer from './content/Game/List/GameListContainer';
import SingleGameContainer from './content/Game/Single/SingleGameContainer';
import CreateGame from './content/Game/Single/CreateGame';

export default function(store) {
    return (
        <Route component={ App } path="/">
            <IndexRoute component={ GameListContainer } />

            <Route component={ CreateGame } path="games/create" />
            <Route component={ SingleGameContainer } path="games/:id" />
        </Route>
    );
}
