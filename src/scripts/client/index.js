import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import client from './client';
import reducer from '../shared/reducer';
import routes from '../shared/routes';

// application entry point
client(reducer, routes);
