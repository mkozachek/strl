import * as ROT from 'rot-js';
import { PayloadAction } from '../reducers/types';

const SET_DISPLAY = 'SET_DISPLAY';
const SET_LOCAL_MAP = 'SET_LOCAL_MAP';
const SET_LOCAL_PLAYER_COORDS = 'SET_LOCAL_PLAYER_COORDS';

function setDisplay (display: ROT.Display): PayloadAction {
    return { type: SET_DISPLAY, payload: display };
};

function setLocalMap (map: Array<Array<number>>): PayloadAction {
  return { type: SET_LOCAL_MAP, payload: map };
}

function setLocalPlayerCoords (coords: { x: number, y: number }): PayloadAction {
  return { type: SET_LOCAL_PLAYER_COORDS, payload: coords };
}

export const types = {
    SET_DISPLAY,
    SET_LOCAL_MAP,
    SET_LOCAL_PLAYER_COORDS,
};

export const actions = {
    setDisplay,
    setLocalMap,
    setLocalPlayerCoords,
};
