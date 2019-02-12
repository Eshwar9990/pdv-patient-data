import React from 'react';
import { shallow } from 'enzyme';
import AppTemplate from './AppTemplate';

describe("AppTemplate Component", () => {
    it("should render AppTemplate component", () => {
      const wrapper = shallow(<AppTemplate />);
    });
});