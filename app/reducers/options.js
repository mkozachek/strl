// @flow
import { types } from '../actions/options';
import type { PayloadAction } from './types';

type optionsState = {
    +height: number,
    +width: number,
}

const defaultState = {
    height: 64,
    width: 128,
}

export default function counter(state: optionsState = defaultState, action: PayloadAction) {
    const { type, payload } = action;
    switch (type) {
        case types.SET_HEIGHT:
            return { ...state, height: payload };
        case types.SET_WIDTH:
            return { ...state, width: payload };
        default:
            return state;
    }
}
