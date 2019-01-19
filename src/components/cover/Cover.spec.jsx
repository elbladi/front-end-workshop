import React from 'react';

import {shallow} from 'enzyme';

import Cover from './Cover';

jest.mock('./images/logo.svg'), () => './images/logo.hash.svg';


describe('Cover', () =>{
    const cover = shadow(<Cover />);

    it('should render <Cover />', () => {
        expect(cover).toMatchInlineSnapshot();
    });
})
