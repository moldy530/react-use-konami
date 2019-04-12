import { useEffect, useReducer } from 'react';

import KonamiState from './types/konami-state';
import konamiReducer, { initialState } from './reducer';

type KonamiProps = {
    handler: () => any,
    options?: {code: number[]} | undefined,
};

const useKonami = (props: KonamiProps) => {
    const {
        handler,
        options,
    } = props;

    const [ state, dispatch ] = useReducer(konamiReducer, initialState(options && options.code));

    useEffect(() => {
        const listener = (e: KeyboardEvent) => dispatch({
            type: 'KEY_UP',
            payload: e.code,
        });

        window.addEventListener('keyup', listener);

        return () => window.removeEventListener('keyup', listener);
    }, []);

    useEffect(() => {
        if (state.success) { handler(); }
    }, [state]);
};

export default useKonami;
