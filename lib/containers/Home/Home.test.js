'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Home Component", function () {
  it("should render Home component", function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Home2.default, null));
  });
});