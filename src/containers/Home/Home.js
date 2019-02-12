import React from 'react';
import { render } from "react-dom";
import {connect} from "react-redux";

import patientDataActions from 'pdv-patient-list/lib/actions/patientDataActions';
import { HomeTemplate } from '../../components/HomeTemplate/HomeTemplate';

class Home extends React.Component {
    componentWillMount() {
        this.checkForAppRedirection();
    }

    componentDidUpdate() {
        this.checkForAppRedirection();
    }

    checkForAppRedirection() {
        console.log('Check for /App redirect? ', this.props);
        if(this.props.apiPdvData && this.props.apiPdvData.updateData) {
            for(let i=0;i<Object.keys(this.props.apiPdvData.updateData).length;i++) {
                if(Object.values(this.props.apiPdvData.updateData)[i] !== "" && Object.values(this.props.apiPdvData.updateData)[i] !== undefined) {
                    if(this.props.apiPdvData.updateData.id) {
                        this.props.history.push('/App');
                        break;
                    } 
                }
            }
        }
    }

    render() {
        return <HomeTemplate />
    }
}

const mapStateToProps = (state) => {
    return {
		apiPdvData: state.apiPdvDataReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePatientData: (newPatientData) => {
            dispatch(patientDataActions.changePatientData(newPatientData));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);