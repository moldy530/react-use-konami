import { Action , KonamiState, ReducerAction } from './types';

export const initialState = (initialCode: number[] = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]): KonamiState => {
    return {
        success: false,
        code: initialCode,
        initialCode,
    };
};

const konamiReducer = (state: KonamiState, action: Action) => {
    switch (action.type) {
        case ReducerAction.KeyUp: {
            if (state.success) {
                return state;
            } else if (state.code[0] === action.payload) {
                const code = state.code.slice(1);

                return {
                    ...state,
                    success: code.length === 0,
                    code,
                };
            }
            return initialState(state.initialCode);
        }
        default:
            return state;
    }
};

export default konamiReducer;
