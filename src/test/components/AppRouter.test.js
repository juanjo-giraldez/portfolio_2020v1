import { shallow } from 'enzyme';
import React from 'react';
import { AppRouter } from "../../components/AppRouter";

describe('Test in <About />', () => {

    it('should show success Web Component, <AppRouter />', () => {

        const wrapper =  shallow(<AppRouter />);

        expect(wrapper).toMatchSnapshot();
        
    })
    
    
})