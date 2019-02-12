"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppTemplate = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./AppTemplate.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dumb component for App component Rendering
var AppTemplate = exports.AppTemplate = function AppTemplate(props) {
    return _react2.default.createElement(
        "div",
        { className: "container dropDownContainer" },
        _react2.default.createElement(
            "h5",
            { className: "no-browser-support" },
            "Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening This Demo In Google Chrome."
        ),
        _react2.default.createElement(
            "div",
            { id: "speechRecognition", className: "row" },
            _react2.default.createElement(
                "div",
                { className: "col-lg-3" },
                _react2.default.createElement(
                    "button",
                    { type: "button", className: "btn btn-recog", id: "recognition-btn", onClick: function onClick() {
                            return props.onStartRecord(true);
                        } },
                    "Start Recognition ",
                    _react2.default.createElement(
                        "span",
                        null,
                        _react2.default.createElement("i", { className: "fas fa-microphone" })
                    )
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "col-lg-9 recordingInstructions" },
                _react2.default.createElement(
                    "p",
                    { id: "recording-instructions" },
                    "Press ",
                    _react2.default.createElement(
                        "strong",
                        null,
                        "Start Recognition"
                    ),
                    " button to select Dropdown value by speech recognition"
                )
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
                "div",
                { className: "col-lg-12" },
                _react2.default.createElement(
                    "div",
                    { className: "alert alert-info" },
                    _react2.default.createElement("div", { className: "arrow-down" }),
                    "For Example: You can say ",
                    _react2.default.createElement(
                        "i",
                        null,
                        _react2.default.createElement(
                            "b",
                            null,
                            "Select 'Documentation' from 'Contact Type' Dropdown"
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            "table",
            { className: "table pd-table" },
            _react2.default.createElement(
                "tbody",
                null,
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Name",
                            _react2.default.createElement("i", { className: "fas fa-asterisk asterisk" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "row" },
                            _react2.default.createElement(
                                "div",
                                { className: "col-lg-10" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "input-group name-input" },
                                    _react2.default.createElement("input", { id: "name", type: "text", className: "form-control", name: "name", placeholder: "Enter Name", onChange: function onChange(event) {
                                            return props.onNameChange(event);
                                        } })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Contact Type",
                            _react2.default.createElement("i", { className: "fas fa-asterisk asterisk" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "dropdown" },
                            _react2.default.createElement(
                                "button",
                                { id: "contactType", type: "button", className: "btn btn-dark dropdown-toggle text-left dropdown-button", "data-toggle": "dropdown" },
                                "Contact Type"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "dropdown-menu" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "contactType");
                                        } },
                                    "Documentation"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "contactType");
                                        } },
                                    "Face to Face"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "contactType");
                                        } },
                                    "Telephone"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "contactType");
                                        } },
                                    "Tele-Medicine"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "contactType");
                                        } },
                                    "Indirect"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "contactType");
                                        } },
                                    "Correspondence"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "contactType");
                                        } },
                                    "Other"
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Person Contacted",
                            _react2.default.createElement("i", { className: "fas fa-asterisk asterisk" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "dropdown" },
                            _react2.default.createElement(
                                "button",
                                { id: "personContacted", type: "button", className: "btn btn-dark dropdown-toggle text-left dropdown-button", "data-toggle": "dropdown" },
                                "Person Contacted"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "dropdown-menu" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "personContacted");
                                        } },
                                    "Patient with Family"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "personContacted");
                                        } },
                                    "Patient"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "personContacted");
                                        } },
                                    "Family"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "personContacted");
                                        } },
                                    "Guardian"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "personContacted");
                                        } },
                                    "Patient with Guardian"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "personContacted");
                                        } },
                                    "Other"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "personContacted");
                                        } },
                                    "Collateral"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Place of Service",
                            _react2.default.createElement("i", { className: "fas fa-asterisk asterisk" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "dropdown" },
                            _react2.default.createElement(
                                "button",
                                { id: "placeOfService", type: "button", className: "btn btn-dark dropdown-toggle text-left dropdown-button", "data-toggle": "dropdown" },
                                "Place of Service"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "dropdown-menu" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "Clinic/Office"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "Home"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "Community Setting"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "Jail/Juvenile Detention"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "BH State Facility"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "Nursing Facility"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "School"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "Residential Program"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "Day Program"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "Family Child Care"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "Hospital"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "State Supported Living Center"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "Court"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "Vocational/Habilitation"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "placeOfService");
                                        } },
                                    "Psych Hospital"
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Appointment Type "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "dropdown" },
                            _react2.default.createElement(
                                "button",
                                { id: "appointmentType", type: "button", className: "btn btn-dark dropdown-toggle text-left dropdown-button", "data-toggle": "dropdown" },
                                "Appointment Type"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "dropdown-menu" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "appointmentType");
                                        } },
                                    "Scheduled"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "appointmentType");
                                        } },
                                    "Walk-in\\Unscheduled"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "appointmentType");
                                        } },
                                    "No show"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "appointmentType");
                                        } },
                                    "Cancelled by Patient"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "appointmentType");
                                        } },
                                    "Crisis"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "appointmentType");
                                        } },
                                    "Telephone"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "appointmentType");
                                        } },
                                    "Cancelled by Provider"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "appointmentType");
                                        } },
                                    "Cancelled by Family"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Billing Type "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "dropdown" },
                            _react2.default.createElement(
                                "button",
                                { id: "billingType", type: "button", className: "btn btn-dark dropdown-toggle text-left dropdown-button", "data-toggle": "dropdown" },
                                "Billing Type"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "dropdown-menu" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "billingType");
                                        } },
                                    "Billable"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "billingType");
                                        } },
                                    "Non-billable"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "billingType");
                                        } },
                                    "Authorized on Plan"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "billingType");
                                        } },
                                    "No Authorization Required"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "billingType");
                                        } },
                                    "PAP - Service Funded"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "billingType");
                                        } },
                                    "Unauthorized - Not on Plan"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "billingType");
                                        } },
                                    "No Current Plan"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "billingType");
                                        } },
                                    "Expanded Problem-Focused"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "billingType");
                                        } },
                                    "Crisis"
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Intensity Type "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "dropdown" },
                            _react2.default.createElement(
                                "button",
                                { id: "intesityType", type: "button", className: "btn btn-dark dropdown-toggle text-left dropdown-button", "data-toggle": "dropdown" },
                                "Intensity Type"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "dropdown-menu" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "intesityType");
                                        } },
                                    "Crisis"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "intesityType");
                                        } },
                                    "Routine"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "intesityType");
                                        } },
                                    "High"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "intesityType");
                                        } },
                                    "Moderate"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "intesityType");
                                        } },
                                    "Low"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Add-On Modifier "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "dropdown" },
                            _react2.default.createElement(
                                "button",
                                { id: "addOnModifier", type: "button", className: "btn btn-dark dropdown-toggle text-left dropdown-button", "data-toggle": "dropdown" },
                                "Add-On Modifier"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "dropdown-menu" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "addOnModifier");
                                        } },
                                    "Total Time Test"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "addOnModifier");
                                        } },
                                    "Initial Evaluation"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "addOnModifier");
                                        } },
                                    "Enrichment Service"
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Lab Type",
                            _react2.default.createElement("i", { className: "fas fa-asterisk asterisk" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "dropdown" },
                            _react2.default.createElement(
                                "button",
                                { id: "labType", type: "button", className: "btn btn-dark dropdown-toggle text-left dropdown-button", "data-toggle": "dropdown" },
                                "Lab Type"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "dropdown-menu" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "labType");
                                        } },
                                    "Urine Drug Screen"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "labType");
                                        } },
                                    "Urine Dipstick"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "labType");
                                        } },
                                    "Blood Glucose"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "labType");
                                        } },
                                    "CBC"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Outside Facility "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "dropdown" },
                            _react2.default.createElement(
                                "button",
                                { id: "outsideFacility", type: "button", className: "btn btn-dark dropdown-toggle text-left dropdown-button", "data-toggle": "dropdown" },
                                "Outside Facility"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "dropdown-menu" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "outsideFacility");
                                        } },
                                    "Outside Facility A"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "outsideFacility");
                                        } },
                                    "Outside Facility B"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "outsideFacility");
                                        } },
                                    "Outside Facility C"
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "EBP/SS 1 "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "dropdown" },
                            _react2.default.createElement(
                                "button",
                                { id: "ebp_ss1", type: "button", className: "btn btn-dark dropdown-toggle text-left dropdown-button", "data-toggle": "dropdown" },
                                "EBP/SS 1"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "dropdown-menu" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "ebp_ss1");
                                        } },
                                    "Assertive Community Treatment"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "ebp_ss1");
                                        } },
                                    "Supportive Employment"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "ebp_ss1");
                                        } },
                                    "Supportive Housing"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "ebp_ss1");
                                        } },
                                    "Family Psychoeducation"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "ebp_ss1");
                                        } },
                                    "Integrated Dual Diagnosis Tx"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Category "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "dropdown" },
                            _react2.default.createElement(
                                "button",
                                { id: "category", type: "button", className: "btn btn-dark dropdown-toggle text-left dropdown-button", "data-toggle": "dropdown" },
                                "Category"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "dropdown-menu" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "category");
                                        } },
                                    "Indicated"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "category");
                                        } },
                                    "Selected"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dropdown-item", href: "#", onClick: function onClick(event) {
                                            return props.onChangeDropdown(event, "category");
                                        } },
                                    "Universal"
                                )
                            )
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
                "label",
                { htmlFor: "note-textarea" },
                _react2.default.createElement(
                    "button",
                    { type: "button", className: "btn btn-sm btn-default", onClick: function onClick() {
                            return props.onStartRecord(false);
                        }, id: "narrativeNotesBtn" },
                    "Take Narrative Notes  ",
                    _react2.default.createElement(
                        "span",
                        null,
                        _react2.default.createElement("i", { className: "fas fa-microphone" })
                    )
                )
            ),
            _react2.default.createElement("textarea", { className: "form-control", rows: "4", id: "note-textarea", placeholder: "Make notes by clicking on the button above and start speaking " })
        ),
        _react2.default.createElement(
            "center",
            { className: "submit-btn" },
            _react2.default.createElement(
                "button",
                { type: "button", className: !props.isSubmitValid ? "btn btn-primary not-allowed" : "btn btn-primary", onClick: props.onSubmit, id: "submit", disabled: !props.isSubmitValid },
                "Submit"
            )
        )
    );
};