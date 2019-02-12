'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("App Component", function () {
  it("should render App component", function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_App2.default, null));
  });
});