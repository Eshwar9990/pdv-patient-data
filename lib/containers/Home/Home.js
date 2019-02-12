"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _patientDataActions = require("pdv-patient-list/lib/actions/patientDataActions");

var _patientDataActions2 = _interopRequireDefault(_patientDataActions);

var _HomeTemplate = require("../../components/HomeTemplate/HomeTemplate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.checkForAppRedirection();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.checkForAppRedirection();
        }
    }, {
        key: "checkForAppRedirection",
        value: function checkForAppRedirection() {
            console.log('Check for /App redirect? ', this.props);
            if (this.props.apiPdvData && this.props.apiPdvData.updateData) {
                for (var i = 0; i < Object.keys(this.props.apiPdvData.updateData).length; i++) {
                    if (Object.values(this.props.apiPdvData.updateData)[i] !== "" && Object.values(this.props.apiPdvData.updateData)[i] !== undefined) {
                        if (this.props.apiPdvData.updateData.id) {
                            this.props.history.push('/App');
                            break;
                        }
                    }
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_HomeTemplate.HomeTemplate, null);
        }
    }]);

    return Home;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        apiPdvData: state.apiPdvDataReducer
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        changePatientData: function changePatientData(newPatientData) {
            dispatch(_patientDataActions2.default.changePatientData(newPatientData));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);