"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Loader = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _loader = require("../../assets/loader.gif");

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = exports.Loader = function Loader() {
    return _react2.default.createElement(
        "center",
        null,
        _react2.default.createElement("img", { src: _loader2.default, alt: "Loader_Icon", height: "600" })
    );
};