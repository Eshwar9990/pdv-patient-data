import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("App Component", () => {
    it("should render App component", () => {
      const wrapper = shallow(<App />);
    });
});