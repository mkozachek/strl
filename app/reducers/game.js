import * as ROT from 'rot-js';
import type { PayloadAction } from './types';
import { types } from '../actions/game';

interface GameState {
    display?: ROT.Display,
    localMap: Array<Array<number>>,
    localPlayerCoords: { x: number, y: number }
};

const defaultState = {
    display: null,
    localMap: [],
    localPlayerCoords: { x: 0, y: 0 },
};


export default (state: GameState = defaultState, action: PayloadAction ) => {
    const { payload, type } = action;
    switch (type) {
        case types.SET_DISPLAY:
          return { ...state, display: payload };
        case types.SET_LOCAL_MAP:
          return { ...state, localMap: payload };
        case types.SET_LOCAL_PLAYER_COORDS:
          return { ...state, localPlayerCoords: payload };
        default:
          return state;
    }
}
