'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("index Component", function () {
  it("should render index component", function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement('index', null));
  });
});