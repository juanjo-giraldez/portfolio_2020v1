import { shallow } from 'enzyme';
import React from 'react';
import { About } from "../../components/About";

describe('Test in <About />', () => {

    it('should show success Web Component', () => {

        const wrapper =  shallow(<About />);

        expect(wrapper).toMatchSnapshot();
        
    })
    
    
})



