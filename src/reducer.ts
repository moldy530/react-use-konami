import { Action , KonamiState, ReducerAction } from './types';

export const initialState = (
    initialCode: string[] = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a',
        'Enter',
    ],
): KonamiState => {
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
        case ReducerAction.Reset:
            return initialState(state.initialCode);
        default:
            return state;
    }
};

export default konamiReducer;
