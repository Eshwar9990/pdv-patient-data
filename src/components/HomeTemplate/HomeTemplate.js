import React from 'react';
import { Link } from "react-router-dom";

import "./HomeTemplate.css";
import LeftPointer from "../../assets/left-pointer.gif";

export const HomeTemplate = (props) => {
    return (
        <div className="messages">
            <Link to={"/app"}>
                <h2>
                    <i className="fa fa-plus plus-icon" style={{color:"dodgerblue", margin: "-2px 5px"}}></i>
                    Click here to create a new log
                </h2>
            </Link>
            
            <div className="row">
                <div className="col-lg-5"></div>
                <div className="col-lg-3">
                    <h4>OR</h4>
                </div>
            </div>
            
            <a href="#">
                    <h2>
                    <img src={LeftPointer} className="left-icon" alt="left-pointer" height="30" />
                    Click on any record to edit
                </h2>    
            </a>
        </div>
    );
};