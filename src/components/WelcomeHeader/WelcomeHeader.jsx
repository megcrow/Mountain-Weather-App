import React from 'react';

import './WelcomeHeader.scss';
import { homedir } from 'os';

function WelcomeHeader() {
    return (
       <div className="header-container">
            <img className="logo" src="/dist/images/logo-white.png"/>
            <h1 className="title"> 14ers Weather Conditions</h1>
            <p className="subtitle">Make the best of your weather window</p>
            <button className="learn-more">Learn More</button>
       </div>
    );
}

export default WelcomeHeader;
