import { PayloadAction } from '../reducers/types';

const SET_HEIGHT = 'SET_HEIGHT';
const SET_WIDTH = 'SET_WIDTH';

function setHeight(height: number): PayloadAction {
    return { type: SET_HEIGHT, payload: height };
}

function setWidth(width: number): PayloadAction {
    return { type: SET_WIDTH, payload: width };
}

export const types = {
    SET_HEIGHT,
    SET_WIDTH,
};

export const actions = {
    setHeight,
    setWidth,
};