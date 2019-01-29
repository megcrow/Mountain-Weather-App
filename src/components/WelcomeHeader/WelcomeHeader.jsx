import React from 'react';

import logoWhite from '../../static/images/logo-white.png';
import './WelcomeHeader.scss';

function WelcomeHeader() {
    return (
       <div className="header-container">
            <div className="header">
                <img src={logoWhite} /> 
                <h1 className="title">14ers Weather Conditions</h1>
            </div>
            <p className="subtitle">Make the best of your weather window</p>
            <button className="learn-more">Learn More</button>
       </div>
    );
}

export default WelcomeHeader;
