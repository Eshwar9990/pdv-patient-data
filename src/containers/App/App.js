import React, { Component } from 'react';
import {connect} from "react-redux";
import $ from 'jquery';

import apiPdvDataActions from "../../actions/apiPdvDataActions";
import notificationActions from "pdv-container/lib/actions/notificationActions";
import {Loader} from "../../components/Loader/Loader";
import { AppTemplate } from '../../components/AppTemplate/AppTemplate';

var stringSimilarity = require('string-similarity');

/* var resetData = {
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
} */
var resetData = {
	"name": "",
	"personContacted": "--",
	"placeOfService": "--",
	"contactType": "--",
	"appointmentType": "--",
	"billingType": "--",
	"intesityType": "--",
	"addOnModifier": "--",
	"labType": "--",
	"outsideFacility": "--",
	"ebp_ss1": "--",
	"category": "--"
}
var SpeechRecognition, recognition;
// var noteContent;
var speech_dropDownOptions = {
	"contactType": [
		"Documentation",
		"Face to Face",
		"Telephone",
		"Tele-Medicine",
		"Indirect",
		"Correspondence",
		"Other"
	],
	// "name": "",
	"personContacted": ["Patient with Family", "Patient", "Family", "Guardian", "Patient with Guardian", "Other", "Collateral"],
	"placeOfService": [
		"Clinic/Office",
		"Home",
		"Community Setting",
		"Jail/Juvenile Detention",
		"BH State Facility",
		"Nursing Facility",
		"School",
		"Residential Program",
		"Day Program",
		"Family Child Care",
		"Hospital",
		"State Supported Living Center",
		"Court",
		"Vocational/Habilitation",
		"Psych Hospital"
	],
	"appointmentType": [
		"Scheduled",
		"Walk-in\\Unscheduled",
		"No show",
		"Cancelled by Patient", 
		"Crisis",
		"Telephone",
		"Cancelled by Provider",
		"Cancelled by Family" 
	],
	"billingType": [
		"Billable",
		"Non-billable",
		"Authorized on Plan",
		"No Authorization Required",
		"PAP - Service Funded",
		"Unauthorized - Not on Plan",
		"No Current Plan",
		"Expanded Problem-Focused",
		"Crisis"
	],
	"intesityType": [
		"Crisis",
		"Routine",
		"High",
		"Moderate",
		"Low"
	],
	"addOnModifier": [
		"Total Time Test",
		"Initial Evaluation",
		"Enrichment Service"
	],
	"labType": [
		"Urine Drug Screen",
		"Urine Dipstick",
		"Blood Glucose",
		"CBC"
	],
	"outsideFacility": [
		"Outside Facility A",
		"Outside Facility B",
		"Outside Facility C",
	],
	"ebp_ss1": [
		"Assertive Community Treatment",
		"Supportive Employment",
		"Supportive Housing",
		"Family Psychoeducation",
		"Integrated Dual Diagnosis Tx"
	],
	"category": [
		"Indicated",
		"Selected",
		"Universal"
	]
};
var noteContent = '';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('props', this.props);
	}

	componentDidMount() {
		try {
			SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
			recognition = new SpeechRecognition();
			// noteContent = "";
		} catch(error) {
			console.error("Error: ", error);
			$('.no-browser-support').show();
			$('#speechRecognition').hide();
		}
		this.populateDropDowns();
	}

	componentDidUpdate(prevProps, prevState) {
		this.populateDropDowns();
	}

	// When Start recognition button is clicked.
	onStartRecord(isDropdownChange) {
		if(!isDropdownChange) {
			if($('#narrativeNotesBtn').html().includes('Take Narrative Notes')) {
				$('#narrativeNotesBtn').html(`Stop recording  <span><svg class="svg-inline--fa fa-microphone fa-w-11" aria-hidden="true" data-prefix="fas" data-icon="microphone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg=""><path fill="currentColor" d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"></path></svg><!-- <i class="fas fa-microphone"></i> --></span>`);
			} else {
				recognition.stop();	
				return;	
			}
		}
		
		let recognisedText = '';
		$("#recognition-btn").prop("disabled", true);
        var noteTextarea = $('#note-textarea');
        var instructions = $('#recording-instructions');

		recognition.continuous = true;
		
		
        recognition.onresult = (event) => {
            var current = event.resultIndex;
            var transcript = event.results[current][0].transcript;
            var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
        
            if(!mobileRepeatBug && isDropdownChange) {
				recognisedText = transcript;
				// noteTextarea.val(recognisedText);
				instructions.html(`Press the <strong>Start Recognition</strong> button and allow access to select Dropdown value by speech recognition`);
				recognition.stop();
				$("#recognition-btn").prop("disabled", false);
				if(recognisedText.includes("from") === true && recognisedText.includes("select") === true) {
					console.log("recognisedText: ", recognisedText);
					var biParts = recognisedText.split(" from ");
					var firstPart = biParts[0].split("select ");
					firstPart = firstPart.toString().replace(",", " ");
					console.log("first part: ", firstPart);
					let secondPossible = ["drop", ".com", "problem", "download"], secondParts, secondPart;
					if(biParts[1] !== undefined) {
						if(biParts[1].includes(secondPossible[0])) {
							secondParts = biParts[1].split(" ");
							if(secondParts[secondParts.length-1].includes("drop")) {
								secondParts.splice(secondParts.length-1, 1);
								secondPart = secondParts.toString().replace(",", " ");
							} else {
								secondParts.splice(secondParts.length-2, 2);
								secondPart = secondParts.toString().replace(",", " ");					
							}
						}
						if(biParts[1].includes(secondPossible[1])) {
							secondParts = biParts[1].split(".com");
							secondPart = secondParts[0].toString();
						}
						if(biParts[1].includes(secondPossible[2]) || biParts[1].includes(secondPossible[3])) {
							secondParts = biParts[1].split(" ");
							secondParts.splice(secondParts.length-1, 1);
							secondPart = secondParts.toString().replace(",", " ");
						}
						console.log("second part", secondPart);
						if(secondPart === undefined || firstPart === undefined) {
							console.log("Please speak again");
							recognisedText = "";
							recognition.stop();
							$("#recognition-btn").prop("disabled", false);
						} else {
							let headingMatches = stringSimilarity.findBestMatch(secondPart, Object.keys(speech_dropDownOptions));
	
							if(headingMatches.bestMatch.rating > 0.4) {
								console.log('headings best match: ', headingMatches.bestMatch.target)
								let valueMatches = stringSimilarity.findBestMatch(firstPart, speech_dropDownOptions[headingMatches.bestMatch.target]);
								console.log("values best match: ", valueMatches.bestMatch.target);

								$("#" + headingMatches.bestMatch.target).html(valueMatches.bestMatch.target);
								console.log('props', this.props);
								this.props.dropDownUpdate(headingMatches.bestMatch.target, valueMatches.bestMatch.target);
								recognisedText = "";
								this.isSubmitBtnValid();
							} else {
								recognisedText = "";
								recognition.stop();
								$("#recognition-btn").prop("disabled", false);
								instructions.text('Please try again by speaking close to microphone');
							}
						}	
					} else {
						console.log("Please speak again");
						recognisedText = "";
						recognition.stop();
						$("#recognition-btn").prop("disabled", false);
						instructions.text('Please try again by speaking close to microphone');
					}
				} else {
					console.log("Please speak again");
					recognisedText = "";
					recognition.stop();
					$("#recognition-btn").prop("disabled", false);
					instructions.text('Please try again by speaking close to microphone');

				}
            } else if(!mobileRepeatBug && !isDropdownChange) {
				noteContent += transcript;
                noteTextarea.val(noteContent);
			}
        };

        recognition.onstart = function() { 
            instructions.text('Voice recognition activated. Try speaking into the microphone.');
        }
        
        recognition.onspeechend = function() {
			instructions.text('Please try again by speaking close to microphone');
			// instructions.text('You were quiet for a while so voice recognition turned itself off.');
			$("#recognition-btn").prop("disabled", false);		
        }
        
        recognition.onerror = function(event) {
            if(event.error == 'no-speech') {
				instructions.text('No speech was detected. Try again.');  
				$("#recognition-btn").prop("disabled", false);				
            };
        }

        if (recognisedText.length) {
            recognisedText += ' ';
		}
        recognition.start();
	}
	
	/*onNotesChange(event) {
        noteContent = event.target.value;
	}*/

	populateDropDowns() {
		if(this.props.apiPdvData) {
			for(let i=0;i<Object.keys(this.props.apiPdvData.updateData).length;i++) {
				if(Object.keys(this.props.apiPdvData.updateData)[i] === 'name') {
					$('#name').val(Object.values(this.props.apiPdvData.updateData)[i]);
				} else {
					(Object.values(this.props.apiPdvData.updateData)[i] === "") ? $('#' + Object.keys(this.props.apiPdvData.updateData)[i]).html(resetData[Object.keys(this.props.apiPdvData.updateData)[i]]) : $('#' + Object.keys(this.props.apiPdvData.updateData)[i]).html(Object.values(this.props.apiPdvData.updateData)[i]) ;
				}
			}
		} 
	}

	onChangeDropdown(event, target) {
		$('#' + target).html(event.target.textContent);
		this.props.dropDownUpdate(target, event.target.textContent);
		this.isSubmitBtnValid();
	}

	onSubmit() {
		$('#note-textarea').val(null);
		if(this.props.apiPdvData.updateData.id) {
			let updateObject = Object.assign({}, this.props.apiPdvData.updateData);
			delete updateObject['id'];
			this.props.put("patients", this.props.apiPdvData.updateData.id, updateObject);
			this.props.setNotificationContent("Successfully updated patient details");
		} else {
			this.props.post("patients", this.props.apiPdvData.updateData);
			this.props.setNotificationContent("Successfully created patient record");
		}
	}

	isSubmitBtnValid() {
		if(this.props.apiPdvData.updateData.name && this.props.apiPdvData.updateData.contactType && this.props.apiPdvData.updateData.personContacted && this.props.apiPdvData.updateData.placeOfService && this.props.apiPdvData.updateData.labType) {
			this.props.changeSubmitValidation(true);
		} else {
			this.props.changeSubmitValidation(false);			
		}
	}

	onNameChange(event) {
		this.props.apiPdvData.updateData.name = event.target.value;
		this.isSubmitBtnValid();
	}

	resetForm() {
		for(let i=0;i<Object.keys(resetData).length;i++) {
			if(Object.keys(resetData)[i] === 'name') {
				$('#' + Object.keys(resetData)[i]).val("");
			} else {
				$('#' + Object.keys(resetData)[i]).html(resetData[Object.keys(resetData)[i]]);
			}
		}
	}

	render() {
		console.log('Props From render Pdv patient data: ', this.props);
		if(this.props.apiPdvData) {
			let isInitialState = false;
			for(let i=0;i<Object.keys(this.props.apiPdvData.updateData).length;i++) {
				if(Object.values(this.props.apiPdvData.updateData)[i] === "" || Object.values(this.props.apiPdvData.updateData)[i] === undefined) {
					isInitialState = true;
				} else {
					isInitialState = false;
					break;
				}
			}
			if(isInitialState === true) {
				this.resetForm();
			} else {
				this.populateDropDowns();
			}
			if(this.props.apiPdvData.data && this.props.apiPdvData.data.data && !this.props.apiPdvData.data.data.fetchData) {
				this.props.getCommon("patients");		
				return <Loader />
			} else {
				return <AppTemplate 
							onStartRecord={this.onStartRecord.bind(this)} 
							onNameChange={this.onNameChange.bind(this)} 
							onChangeDropdown={this.onChangeDropdown.bind(this)}
							onSubmit={this.onSubmit.bind(this)}
							isSubmitValid={this.props.apiPdvData.isSubmitValid}
						/>;
			}
		}
	}
}

const mapStateToProps = (state) => {
    return {
		apiPdvData: state.apiPdvDataReducer,
		notification: state.notificationReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
		post: (partialUrl, reqBody) => {
            dispatch(apiPdvDataActions.post(partialUrl, reqBody));
		},
		put: (partialUrl, ids, reqBody) => {
            dispatch(apiPdvDataActions.put(partialUrl, ids, reqBody));
		},
		changeSubmitValidation: (value) => {
            dispatch(apiPdvDataActions.changeSubmitValidation(value));
		},
		dropDownUpdate: (key, value) => {
            dispatch(apiPdvDataActions.dropDownUpdate(key, value));
		},
		get: (partialUrl, ids) => {
            dispatch(apiPdvDataActions.get(partialUrl, ids));
		},
		getCommon: (partialUrl, ids) => {
            dispatch(apiPdvDataActions.getCommon(partialUrl, ids));
		},
		setNotificationContent: (newMessage) => {
            dispatch(notificationActions.setNotificationContent(newMessage));
		},
		setUpdateData: (updateData) => {
			dispatch(apiPdvDataActions.setUpdateData(updateData))
		}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
