import '@testing-library/jest-dom';
import { act, renderHook } from "@testing-library/react-hooks";
import { useStateBar } from "../../hooks/useStateBar";

describe('test in useStateBar.js', () => {

    const initialState = false;
    
    test('should return default values ', () => {

        const { result } = renderHook(() => useStateBar( { initialState } ));

        expect(result.current.state).not.toBe(true);
        expect(typeof result.current.open).toBe('function');
        expect(typeof result.current.reset).toBe('function');
        expect(typeof result.current.close).toBe('function');

    }),

    test('should initialState have the state are false', () => {

        const { result } = renderHook(() => useStateBar( { initialState } ));

        expect(result.current.state).toBe(false);
    }),

    test('should  open sideBar , state of useStateBar is true',  () => {
        const { result } = renderHook(() => useStateBar( { initialState } ));

        const { open } = result.current;

        act(() => {

            open();

        })

        const { state } = result.current;

        expect( state ).toBe(true);

    }),

    test('should  close sideBar , state of useStateBar is true',  () => {
        const { result } = renderHook(() => useStateBar( { initialState } ));


        const { close } = result.current;

        act(() => {

            close();

        })

        const { state } = result.current;

        expect( state ).toBe(true);

    }), 

    test('should  close sideBar , state of useStateBar is true',  () => {
        const { result } = renderHook(() => useStateBar( { initialState } ));

        const { close, reset } = result.current;

        act(() => {

            close();
            reset();

        })

        const { state } = result.current;

        expect( state ).toBe(false);

    })

})