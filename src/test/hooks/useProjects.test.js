import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useProjects } from '../../hooks/useProjects';

describe('Test in useProjects hook', () => {

    it('should to return to the initial state ', () => {

        const { result} = renderHook(() => useProjects()); 


        const { data } = result.current;

        expect( data ).toEqual([]);




    })

    
})


