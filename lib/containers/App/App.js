'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _apiPdvDataActions = require('../../actions/apiPdvDataActions');

var _apiPdvDataActions2 = _interopRequireDefault(_apiPdvDataActions);

var _notificationActions = require('pdv-container/lib/actions/notificationActions');

var _notificationActions2 = _interopRequireDefault(_notificationActions);

var _Loader = require('../../components/Loader/Loader');

var _AppTemplate = require('../../components/AppTemplate/AppTemplate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stringSimilarity = require('string-similarity');

var resetData = {
	"name": "",
	"personContacted": "Person Contacted",
	"placeOfService": "Place of Service",
	"contactType": "Contact Type",
	"appointmentType": "Appointment Type",
	"billingType": "Billing Type",
	"intesityType": "Intensity Type",
	"addOnModifier": "Add-On Modifier",
	"labType": "Lab Type",
	"outsideFacility": "Outside Facility",
	"ebp_ss1": "EBP/SS 1",
	"category": "Category"
};
var SpeechRecognition, recognition;
// var noteContent;
var speech_dropDownOptions = {
	"contactType": ["Documentation", "Face to Face", "Telephone", "Tele-Medicine", "Indirect", "Correspondence", "Other"],
	// "name": "",
	"personContacted": ["Patient with Family", "Patient", "Family", "Guardian", "Patient with Guardian", "Other", "Collateral"],
	"placeOfService": ["Clinic/Office", "Home", "Community Setting", "Jail/Juvenile Detention", "BH State Facility", "Nursing Facility", "School", "Residential Program", "Day Program", "Family Child Care", "Hospital", "State Supported Living Center", "Court", "Vocational/Habilitation", "Psych Hospital"],
	"appointmentType": ["Scheduled", 'Walk-in\\Unscheduled', "No show", "Cancelled by Patient", "Crisis", "Telephone", "Cancelled by Provider", "Cancelled by Family"],
	"billingType": ["Billable", "Non-billable", "Authorized on Plan", "No Authorization Required", "PAP - Service Funded", "Unauthorized - Not on Plan", "No Current Plan", "Expanded Problem-Focused", "Crisis"],
	"intesityType": ["Crisis", "Routine", "High", "Moderate", "Low"],
	"addOnModifier": ["Total Time Test", "Initial Evaluation", "Enrichment Service"],
	"labType": ["Urine Drug Screen", "Urine Dipstick", "Blood Glucose", "CBC"],
	"outsideFacility": ["Outside Facility A", "Outside Facility B", "Outside Facility C"],
	"ebp_ss1": ["Assertive Community Treatment", "Supportive Employment", "Supportive Housing", "Family Psychoeducation", "Integrated Dual Diagnosis Tx"],
	"category": ["Indicated", "Selected", "Universal"]
};
var noteContent = '';

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		console.log('props', _this.props);
		return _this;
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
				recognition = new SpeechRecognition();
				// noteContent = "";
			} catch (error) {
				console.error("Error: ", error);
				(0, _jquery2.default)('.no-browser-support').show();
				(0, _jquery2.default)('#speechRecognition').hide();
			}
			this.populateDropDowns();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			this.populateDropDowns();
		}

		// When Start recognition button is clicked.

	}, {
		key: 'onStartRecord',
		value: function onStartRecord(isDropdownChange) {
			var _this2 = this;

			if (!isDropdownChange) {
				if ((0, _jquery2.default)('#narrativeNotesBtn').html().includes('Take Narrative Notes')) {
					(0, _jquery2.default)('#narrativeNotesBtn').html('Stop recording  <span><svg class="svg-inline--fa fa-microphone fa-w-11" aria-hidden="true" data-prefix="fas" data-icon="microphone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg=""><path fill="currentColor" d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"></path></svg><!-- <i class="fas fa-microphone"></i> --></span>');
				} else {
					recognition.stop();
					return;
				}
			}

			var recognisedText = '';
			(0, _jquery2.default)("#recognition-btn").prop("disabled", true);
			var noteTextarea = (0, _jquery2.default)('#note-textarea');
			var instructions = (0, _jquery2.default)('#recording-instructions');

			recognition.continuous = true;

			recognition.onresult = function (event) {
				var current = event.resultIndex;
				var transcript = event.results[current][0].transcript;
				var mobileRepeatBug = current == 1 && transcript == event.results[0][0].transcript;

				if (!mobileRepeatBug && isDropdownChange) {
					recognisedText = transcript;
					// noteTextarea.val(recognisedText);
					instructions.html('Press the <strong>Start Recognition</strong> button and allow access to select Dropdown value by speech recognition');
					recognition.stop();
					(0, _jquery2.default)("#recognition-btn").prop("disabled", false);
					if (recognisedText.includes("from") === true && recognisedText.includes("select") === true) {
						console.log("recognisedText: ", recognisedText);
						var biParts = recognisedText.split(" from ");
						var firstPart = biParts[0].split("select ");
						firstPart = firstPart.toString().replace(",", " ");
						console.log("first part: ", firstPart);
						var secondPossible = ["drop", ".com", "problem", "download"],
						    secondParts = void 0,
						    secondPart = void 0;
						if (biParts[1] !== undefined) {
							if (biParts[1].includes(secondPossible[0])) {
								secondParts = biParts[1].split(" ");
								if (secondParts[secondParts.length - 1].includes("drop")) {
									secondParts.splice(secondParts.length - 1, 1);
									secondPart = secondParts.toString().replace(",", " ");
								} else {
									secondParts.splice(secondParts.length - 2, 2);
									secondPart = secondParts.toString().replace(",", " ");
								}
							}
							if (biParts[1].includes(secondPossible[1])) {
								secondParts = biParts[1].split(".com");
								secondPart = secondParts[0].toString();
							}
							if (biParts[1].includes(secondPossible[2]) || biParts[1].includes(secondPossible[3])) {
								secondParts = biParts[1].split(" ");
								secondParts.splice(secondParts.length - 1, 1);
								secondPart = secondParts.toString().replace(",", " ");
							}
							console.log("second part", secondPart);
							if (secondPart === undefined || firstPart === undefined) {
								console.log("Please speak again");
								recognisedText = "";
								recognition.stop();
								(0, _jquery2.default)("#recognition-btn").prop("disabled", false);
							} else {
								var headingMatches = stringSimilarity.findBestMatch(secondPart, Object.keys(speech_dropDownOptions));

								if (headingMatches.bestMatch.rating > 0.4) {
									console.log('headings best match: ', headingMatches.bestMatch.target);
									var valueMatches = stringSimilarity.findBestMatch(firstPart, speech_dropDownOptions[headingMatches.bestMatch.target]);
									console.log("values best match: ", valueMatches.bestMatch.target);

									(0, _jquery2.default)("#" + headingMatches.bestMatch.target).html(valueMatches.bestMatch.target);
									console.log('props', _this2.props);
									_this2.props.dropDownUpdate(headingMatches.bestMatch.target, valueMatches.bestMatch.target);
									recognisedText = "";
									_this2.isSubmitBtnValid();
								} else {
									recognisedText = "";
									recognition.stop();
									(0, _jquery2.default)("#recognition-btn").prop("disabled", false);
									instructions.text('Please try again by speaking close to microphone');
								}
							}
						} else {
							console.log("Please speak again");
							recognisedText = "";
							recognition.stop();
							(0, _jquery2.default)("#recognition-btn").prop("disabled", false);
							instructions.text('Please try again by speaking close to microphone');
						}
					} else {
						console.log("Please speak again");
						recognisedText = "";
						recognition.stop();
						(0, _jquery2.default)("#recognition-btn").prop("disabled", false);
						instructions.text('Please try again by speaking close to microphone');
					}
				} else if (!mobileRepeatBug && !isDropdownChange) {
					noteContent += transcript;
					noteTextarea.val(noteContent);
				}
			};

			recognition.onstart = function () {
				instructions.text('Voice recognition activated. Try speaking into the microphone.');
			};

			recognition.onspeechend = function () {
				instructions.text('Please try again by speaking close to microphone');
				// instructions.text('You were quiet for a while so voice recognition turned itself off.');
				(0, _jquery2.default)("#recognition-btn").prop("disabled", false);
			};

			recognition.onerror = function (event) {
				if (event.error == 'no-speech') {
					instructions.text('No speech was detected. Try again.');
					(0, _jquery2.default)("#recognition-btn").prop("disabled", false);
				};
			};

			if (recognisedText.length) {
				recognisedText += ' ';
			}
			recognition.start();
		}

		/*onNotesChange(event) {
         noteContent = event.target.value;
  }*/

	}, {
		key: 'populateDropDowns',
		value: function populateDropDowns() {
			if (this.props.apiPdvData) {
				for (var i = 0; i < Object.keys(this.props.apiPdvData.updateData).length; i++) {
					if (Object.keys(this.props.apiPdvData.updateData)[i] === 'name') {
						(0, _jquery2.default)('#name').val(Object.values(this.props.apiPdvData.updateData)[i]);
					} else {
						Object.values(this.props.apiPdvData.updateData)[i] === "" ? (0, _jquery2.default)('#' + Object.keys(this.props.apiPdvData.updateData)[i]).html(resetData[Object.keys(this.props.apiPdvData.updateData)[i]]).removeClass("btn-basic").addClass("btn-dark") : (0, _jquery2.default)('#' + Object.keys(this.props.apiPdvData.updateData)[i]).html(Object.values(this.props.apiPdvData.updateData)[i]).addClass("btn-basic").removeClass("btn-dark");
					}
				}
			}
		}
	}, {
		key: 'onChangeDropdown',
		value: function onChangeDropdown(event, target) {
			(0, _jquery2.default)('#' + target).html(event.target.textContent).removeClass("btn-dark").addClass("btn-basic");
			this.props.dropDownUpdate(target, event.target.textContent);
			this.isSubmitBtnValid();
		}
	}, {
		key: 'onSubmit',
		value: function onSubmit() {
			(0, _jquery2.default)('#note-textarea').val(null);
			if (this.props.apiPdvData.updateData.id) {
				var updateObject = Object.assign({}, this.props.apiPdvData.updateData);
				delete updateObject['id'];
				this.props.put("patients", this.props.apiPdvData.updateData.id, updateObject);
				this.props.setNotificationContent("Successfully updated patient details");
			} else {
				this.props.post("patients", this.props.apiPdvData.updateData);
				this.props.setNotificationContent("Successfully created patient record");
			}
		}
	}, {
		key: 'isSubmitBtnValid',
		value: function isSubmitBtnValid() {
			if (this.props.apiPdvData.updateData.name && this.props.apiPdvData.updateData.contactType && this.props.apiPdvData.updateData.personContacted && this.props.apiPdvData.updateData.placeOfService && this.props.apiPdvData.updateData.labType) {
				this.props.changeSubmitValidation(true);
			} else {
				this.props.changeSubmitValidation(false);
			}
		}
	}, {
		key: 'onNameChange',
		value: function onNameChange(event) {
			this.props.apiPdvData.updateData.name = event.target.value;
			this.isSubmitBtnValid();
		}
	}, {
		key: 'resetForm',
		value: function resetForm() {
			for (var i = 0; i < Object.keys(resetData).length; i++) {
				if (Object.keys(resetData)[i] === 'name') {
					(0, _jquery2.default)('#' + Object.keys(resetData)[i]).val("");
				} else {
					(0, _jquery2.default)('#' + Object.keys(resetData)[i]).html(resetData[Object.keys(resetData)[i]]).removeClass("btn-basic").addClass("btn-dark");
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			console.log('Props From render Pdv patient data: ', this.props);
			if (this.props.apiPdvData) {
				var isInitialState = false;
				for (var i = 0; i < Object.keys(this.props.apiPdvData.updateData).length; i++) {
					if (Object.values(this.props.apiPdvData.updateData)[i] === "" || Object.values(this.props.apiPdvData.updateData)[i] === undefined) {
						isInitialState = true;
					} else {
						isInitialState = false;
						break;
					}
				}
				if (isInitialState === true) {
					this.resetForm();
				} else {
					this.populateDropDowns();
				}
				if (this.props.apiPdvData.data && this.props.apiPdvData.data.data && !this.props.apiPdvData.data.data.fetchData) {
					this.props.getCommon("patients");
					return _react2.default.createElement(_Loader.Loader, null);
				} else {
					return _react2.default.createElement(_AppTemplate.AppTemplate, {
						onStartRecord: this.onStartRecord.bind(this),
						onNameChange: this.onNameChange.bind(this),
						onChangeDropdown: this.onChangeDropdown.bind(this),
						onSubmit: this.onSubmit.bind(this),
						isSubmitValid: this.props.apiPdvData.isSubmitValid
					});
				}
			}
		}
	}]);

	return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		apiPdvData: state.apiPdvDataReducer,
		notification: state.notificationReducer
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		post: function post(partialUrl, reqBody) {
			dispatch(_apiPdvDataActions2.default.post(partialUrl, reqBody));
		},
		put: function put(partialUrl, ids, reqBody) {
			dispatch(_apiPdvDataActions2.default.put(partialUrl, ids, reqBody));
		},
		changeSubmitValidation: function changeSubmitValidation(value) {
			dispatch(_apiPdvDataActions2.default.changeSubmitValidation(value));
		},
		dropDownUpdate: function dropDownUpdate(key, value) {
			dispatch(_apiPdvDataActions2.default.dropDownUpdate(key, value));
		},
		get: function get(partialUrl, ids) {
			dispatch(_apiPdvDataActions2.default.get(partialUrl, ids));
		},
		getCommon: function getCommon(partialUrl, ids) {
			dispatch(_apiPdvDataActions2.default.getCommon(partialUrl, ids));
		},
		setNotificationContent: function setNotificationContent(newMessage) {
			dispatch(_notificationActions2.default.setNotificationContent(newMessage));
		},
		setUpdateData: function setUpdateData(updateData) {
			dispatch(_apiPdvDataActions2.default.setUpdateData(updateData));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);