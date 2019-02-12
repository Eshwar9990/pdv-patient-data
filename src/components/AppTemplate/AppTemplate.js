import React from 'react';
import "./AppTemplate.css";

// Dumb component for App component Rendering
export const AppTemplate = (props) => {
    return (
        <div className="container dropDownContainer">
            <h5 className="no-browser-support">Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening This Demo In Google Chrome.</h5>
            <div id="speechRecognition" className="row">
                <div className="col-lg-3">
                    <button type="button" className="btn btn-recog" id="recognition-btn" onClick={() => props.onStartRecord(true)}>Start Recognition <span><i className="fas fa-microphone"></i></span></button>
                </div>
                <div className="col-lg-9 recordingInstructions">
                    <p id="recording-instructions">Press <strong>Start Recognition</strong> button to select Dropdown value by speech recognition</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="alert alert-info">
                        <div className="arrow-down"></div>
                        For Example: You can say <i><b>Select 'Documentation' from 'Contact Type' Dropdown</b></i>
                    </div>
                </div>
                
                {/* <div className="form-group noteTextArea">
                    <label htmlFor="note">Speech to Text: </label>
                    <textarea id="note-textarea" className="form-control" rows="7" placeholder="Here is the speech converted text" onInput={(event) => this.onNotesChange(event)}></textarea>
                </div> */}

                
            </div>
            
            <table className="table pd-table">
                <tbody>
                    <tr>
                        <td>
                            <label>Name<i className="fas fa-asterisk asterisk"></i> </label>
                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="input-group name-input">
                                        <input id="name" type="text" className="form-control" name="name" placeholder="Enter Name" onChange={(event) => props.onNameChange(event)} />
                                    </div>
                                </div>
                            </div>
                            
                        </td>
                        <td>
                            <label>Contact Type<i className="fas fa-asterisk asterisk"></i> </label>
                            <div className="dropdown">
                                <button id="contactType" type="button" className="btn btn-dark dropdown-toggle text-left dropdown-button" data-toggle="dropdown">
                                    Contact Type
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "contactType")}>Documentation</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "contactType")}>Face to Face</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "contactType")}>Telephone</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "contactType")}>Tele-Medicine</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "contactType")}>Indirect</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "contactType")}>Correspondence</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "contactType")}>Other</a>

                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Person Contacted<i className="fas fa-asterisk asterisk"></i> </label>
                            <div className="dropdown">
                                <button id="personContacted" type="button" className="btn btn-dark dropdown-toggle text-left dropdown-button" data-toggle="dropdown">
                                    Person Contacted
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "personContacted")}>Patient with Family</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "personContacted")}>Patient</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "personContacted")}>Family</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "personContacted")}>Guardian</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "personContacted")}>Patient with Guardian</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "personContacted")}>Other</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "personContacted")}>Collateral</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <label>Place of Service<i className="fas fa-asterisk asterisk"></i> </label>
                            <div className="dropdown">
                                <button id="placeOfService" type="button" className="btn btn-dark dropdown-toggle text-left dropdown-button" data-toggle="dropdown">
                                    Place of Service
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>Clinic/Office</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>Home</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>Community Setting</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>Jail/Juvenile Detention</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>BH State Facility</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>Nursing Facility</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>School</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>Residential Program</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>Day Program</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>Family Child Care</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>Hospital</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>State Supported Living Center</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>Court</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>Vocational/Habilitation</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "placeOfService")}>Psych Hospital</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <label>Appointment Type </label>
                            <div className="dropdown">
                                <button id="appointmentType" type="button" className="btn btn-dark dropdown-toggle text-left dropdown-button" data-toggle="dropdown">
                                    Appointment Type
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "appointmentType")}>Scheduled</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "appointmentType")}>Walk-in\Unscheduled</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "appointmentType")}>No show</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "appointmentType")}>Cancelled by Patient</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "appointmentType")}>Crisis</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "appointmentType")}>Telephone</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "appointmentType")}>Cancelled by Provider</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "appointmentType")}>Cancelled by Family</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <label>Billing Type </label>
                            <div className="dropdown">
                                <button id="billingType" type="button" className="btn btn-dark dropdown-toggle text-left dropdown-button" data-toggle="dropdown">
                                    Billing Type
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "billingType")}>Billable</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "billingType")}>Non-billable</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "billingType")}>Authorized on Plan</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "billingType")}>No Authorization Required</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "billingType")}>PAP - Service Funded</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "billingType")}>Unauthorized - Not on Plan</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "billingType")}>No Current Plan</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "billingType")}>Expanded Problem-Focused</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "billingType")}>Crisis</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Intensity Type </label>
                            <div className="dropdown">
                                <button id="intesityType" type="button" className="btn btn-dark dropdown-toggle text-left dropdown-button" data-toggle="dropdown">
                                    Intensity Type
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "intesityType")}>Crisis</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "intesityType")}>Routine</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "intesityType")}>High</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "intesityType")}>Moderate</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "intesityType")}>Low</a>

                                </div>
                            </div>
                        </td>
                        <td>
                            <label>Add-On Modifier </label>
                            <div className="dropdown">
                                <button id="addOnModifier" type="button" className="btn btn-dark dropdown-toggle text-left dropdown-button" data-toggle="dropdown">
                                    Add-On Modifier
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "addOnModifier")}>Total Time Test</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "addOnModifier")}>Initial Evaluation</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "addOnModifier")}>Enrichment Service</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Lab Type<i className="fas fa-asterisk asterisk"></i> </label>
                            <div className="dropdown">
                                <button id="labType" type="button" className="btn btn-dark dropdown-toggle text-left dropdown-button" data-toggle="dropdown">
                                    Lab Type
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "labType")}>Urine Drug Screen</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "labType")}>Urine Dipstick</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "labType")}>Blood Glucose</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "labType")}>CBC</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <label>Outside Facility </label>
                            <div className="dropdown">
                                <button id="outsideFacility" type="button" className="btn btn-dark dropdown-toggle text-left dropdown-button" data-toggle="dropdown">
                                    Outside Facility
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "outsideFacility")}>Outside Facility A</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "outsideFacility")}>Outside Facility B</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "outsideFacility")}>Outside Facility C</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>EBP/SS 1 </label>
                            <div className="dropdown">
                                <button id="ebp_ss1" type="button" className="btn btn-dark dropdown-toggle text-left dropdown-button" data-toggle="dropdown">
                                    EBP/SS 1
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "ebp_ss1")}>Assertive Community Treatment</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "ebp_ss1")}>Supportive Employment</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "ebp_ss1")}>Supportive Housing</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "ebp_ss1")}>Family Psychoeducation</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "ebp_ss1")}>Integrated Dual Diagnosis Tx</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <label>Category </label>
                            <div className="dropdown">
                                <button id="category" type="button" className="btn btn-dark dropdown-toggle text-left dropdown-button" data-toggle="dropdown">
                                    Category
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "category")}>Indicated</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "category")}>Selected</a>
                                    <a className="dropdown-item" href="#" onClick={(event) => props.onChangeDropdown(event, "category")}>Universal</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="form-group">
                <label htmlFor="note-textarea">
                    <button type="button" className="btn btn-sm btn-default" onClick={() => props.onStartRecord(false)} id="narrativeNotesBtn">Take Narrative Notes  <span><i className="fas fa-microphone"></i></span></button>
                </label>
                <textarea className="form-control" rows="4" id="note-textarea" placeholder="Make notes by clicking on the button above and start speaking "></textarea>
            </div>
            <center className="submit-btn">
                <button type="button" className={(!props.isSubmitValid ? "btn btn-primary not-allowed" : "btn btn-primary")} onClick={props.onSubmit} id="submit" disabled={!props.isSubmitValid}>Submit</button>
            </center>
        </div>	
    );
};