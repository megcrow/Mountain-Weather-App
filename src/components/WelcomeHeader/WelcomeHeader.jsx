import React from 'react';

import logoWhite from '../../static/images/logo-white.png';
import './WelcomeHeader.scss';

function WelcomeHeader() {
    return (
       <div className="header-container">
            <img
                className="logo"
                src={logoWhite}
            /> 
            <div className="header">
                <h1 className="title">
                    14ers Weather Conditions
                </h1>
                <p className="subtitle">
                    Make the best of your weather window
                </p>
            <button className="learn-more">
                Learn More
            </button>
            </div>
       </div>
    );
}

export default WelcomeHeader;
