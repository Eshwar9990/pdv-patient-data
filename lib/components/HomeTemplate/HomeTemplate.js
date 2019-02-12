"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HomeTemplate = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

require("./HomeTemplate.css");

var _leftPointer = require("../../assets/left-pointer.gif");

var _leftPointer2 = _interopRequireDefault(_leftPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeTemplate = exports.HomeTemplate = function HomeTemplate(props) {
    return _react2.default.createElement(
        "div",
        { className: "messages" },
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/app" },
            _react2.default.createElement(
                "h2",
                null,
                _react2.default.createElement("i", { className: "fa fa-plus plus-icon", style: { color: "dodgerblue", margin: "-2px 5px" } }),
                "Click here to create a new log"
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement("div", { className: "col-lg-5" }),
            _react2.default.createElement(
                "div",
                { className: "col-lg-3" },
                _react2.default.createElement(
                    "h4",
                    null,
                    "OR"
                )
            )
        ),
        _react2.default.createElement(
            "a",
            { href: "#" },
            _react2.default.createElement(
                "h2",
                null,
                _react2.default.createElement("img", { src: _leftPointer2.default, className: "left-icon", alt: "left-pointer", height: "30" }),
                "Click on any record to edit"
            )
        )
    );
};