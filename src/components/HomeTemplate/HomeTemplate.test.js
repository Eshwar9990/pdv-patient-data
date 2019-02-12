import React from 'react';
import { shallow } from 'enzyme';
import HomeTemplate from './HomeTemplate';

describe("HomeTemplate Component", () => {
    it("should render HomeTemplate component", () => {
      const wrapper = shallow(<HomeTemplate />);
    });
});