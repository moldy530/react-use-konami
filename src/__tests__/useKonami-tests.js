import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import useKonami from '../use-konami';

describe('use-konami', () => {
    let handler = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<TestComponent />);
        handler.mockReset();
    });

    afterEach(() => {
        wrapper.unmount();
    });

    const TestComponent = () => {
        useKonami(handler, { code: ['UpArrow', 'DownArrow'] });

        return (<div/>);
    };

    it('should trigger handler on successful input', () => {
        expect(handler.mock.calls.length === 0).toBe(true);

        act(() => {
            const event = new KeyboardEvent('keyup',  { key: 'UpArrow' });
            global.dispatchEvent(event);

            const event2 = new KeyboardEvent('keyup',  { key: 'DownArrow' });
            global.dispatchEvent(event2);
        });

        expect(handler.mock.calls.length === 1).toBe(true);
    });

    it('should reset and retrigger handler on successful input twice', () => {
        expect(handler.mock.calls.length === 0).toBe(true);

        act(() => {
            const event = new KeyboardEvent('keyup',  { key: 'UpArrow' });
            global.dispatchEvent(event);

            const event2 = new KeyboardEvent('keyup',  { key: 'DownArrow' });
            global.dispatchEvent(event2);
        });

        act(() => {
            const event = new KeyboardEvent('keyup',  { key: 'UpArrow' });
            global.dispatchEvent(event);

            const event2 = new KeyboardEvent('keyup',  { key: 'DownArrow' });
            global.dispatchEvent(event2);
        });

        expect(handler.mock.calls.length === 2).toBe(true);
    });
});
