import nock from 'nock';

nock.disableNetConnect();

global.NOCK_SCOPE = 'https://shrouded-lowlands-92761.herokuapp.com';
global.ENDPOINTS_GAMES = '';
