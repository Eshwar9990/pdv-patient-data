'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _HomeTemplate = require('./HomeTemplate');

var _HomeTemplate2 = _interopRequireDefault(_HomeTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("HomeTemplate Component", function () {
  it("should render HomeTemplate component", function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_HomeTemplate2.default, null));
  });
});