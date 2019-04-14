import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import useKonami from '../use-konami';

describe('use-konami', () => {
    const handler = jest.fn();

    const TestComponent = () => {
        useKonami(handler, { code: [1] });

        return (<div/>);
    };

    it('should trigger handler on successful input', () => {
        mount(<TestComponent />);
        expect(handler.mock.calls.length === 0).toBe(true);

        act(() => {
            const event = new KeyboardEvent('keyup',  { key: '1' });
            Object.defineProperty(event, 'code', {value : 1});
            global.dispatchEvent(event);
        });

        expect(handler.mock.calls.length > 0).toBe(true);
    });
});
