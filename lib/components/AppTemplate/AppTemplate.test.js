'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _AppTemplate = require('./AppTemplate');

var _AppTemplate2 = _interopRequireDefault(_AppTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("AppTemplate Component", function () {
  it("should render AppTemplate component", function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AppTemplate2.default, null));
  });
});