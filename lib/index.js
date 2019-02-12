'use strict';

require('@babel/polyfill');

require('core-js/es6/map');

require('core-js/es6/set');

require('raf/polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _Routes = require('./Routes');

var _Routes2 = _interopRequireDefault(_Routes);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_Routes2.default, null)
), window.document.getElementById('root') || document.createElement('div') // For testing purposes
);