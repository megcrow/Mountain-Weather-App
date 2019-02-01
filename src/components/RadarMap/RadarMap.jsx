import React from 'react';

import DarkskyMap from 'react-darksky-map';
import './RadarMap.scss'
 
function RadarMap () {
    return (
        <div className="radar-map">
            <DarkskyMap lat={39.6336} lng={-105.8172} zoom={6} mapField="temp" />
        </div>
    )
}

export default RadarMap
