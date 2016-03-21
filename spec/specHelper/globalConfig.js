import nock from 'nock';

nock.disableNetConnect();

global.NOCK_SCOPE = 'http://localhost:3003';
global.ENDPOINT = '';
