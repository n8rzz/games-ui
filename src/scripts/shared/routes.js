import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './content';
import GameListContainer from './content/Game/List/GameListContainer';

export default function(store) {
    return (
        <Route component={ App } path="/">
            <IndexRoute component={ GameListContainer } />
        </Route>
    );
}
