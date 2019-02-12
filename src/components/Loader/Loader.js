import React from 'react';
import Spinner from "../../assets/loader.gif";

export const Loader = () => {
    return (
        <center>
            <img src={Spinner} alt="Loader_Icon" height="600" />
        </center>
    );
};