import { useEffect, useReducer } from 'react';

import konamiReducer, { initialState } from './reducer';
import { ReducerAction } from './types';

const useKonami = (
    handler: () => any,
    options?: {code: string[]},
) => {
    const [ state, dispatch ] = useReducer(konamiReducer, initialState(options && options.code));

    useEffect(() => {
        const listener = (e: KeyboardEvent) => dispatch({
            type: ReducerAction.KeyUp,
            payload: e.key,
        });

        window.addEventListener('keyup', listener);

        return () => window.removeEventListener('keyup', listener);
    }, []);

    useEffect(() => {
        if (state.success) {
            handler();
            dispatch({ type: ReducerAction.Reset });
        }
    }, [ state, handler ]);
};

export default useKonami;
