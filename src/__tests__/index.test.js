import React from 'react';
import { shallow } from 'enzyme';
import index from '../index';

describe("index Component", () => {
    it("should render index component", () => {
      	const wrapper = shallow(<index />);
    });
});