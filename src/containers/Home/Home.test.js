import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe("Home Component", () => {
    it("should render Home component", () => {
      const wrapper = shallow(<Home />);
    });
});