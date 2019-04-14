import { useEffect, useReducer } from 'react';

import konamiReducer, { initialState } from './reducer';
import ReducerAction from './types/reducer-actions';

const useKonami = (
    handler: () => any,
    options?: {code: number[]},
) => {
    const [ state, dispatch ] = useReducer(konamiReducer, initialState(options && options.code));

    useEffect(() => {
        const listener = (e: KeyboardEvent) => dispatch({
            type: ReducerAction.KeyUp,
            payload: e.code,
        });

        window.addEventListener('keyup', listener);

        return () => window.removeEventListener('keyup', listener);
    }, []);

    useEffect(() => {
        if (state.success) { handler(); }
    }, [ state, handler ]);
};

export default useKonami;
