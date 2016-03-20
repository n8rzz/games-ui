import faker from 'faker';
import { VALID_POSITIVE, VALID_UUID } from './BaseTypes';

export const VALID_NEW_GAME = {
    title: faker.hacker.adjective()
};

export const INVALID_NEW_GAME = {
    title: ''
};

export const VALID_GAME = {
    id: VALID_UUID,
    title: faker.hacker.adjective(),
    votes: 13,
    status: 'wantit'
};

export const INVALID_GAME = {
    id: 1234,
    title: faker.hacker.adjective(),
    votes: 13,
    status: 'wantit'
};

export const VALID_GAME_LIST = [
    VALID_GAME,
    VALID_GAME
];

export const INVALID_GAME_LIST = [
    VALID_GAME,
    INVALID_GAME
];
