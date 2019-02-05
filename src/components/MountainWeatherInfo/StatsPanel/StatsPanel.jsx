import React from "react";

import RadarMap from './RadarMap/RadarMap.jsx';
import WeatherCarousel from './WeatherCarousel/WeatherCarousel.jsx';
import './StatsPanel.scss';

function StatsPanel(props) {
    return (
        <div className="stats-panel">
            <WeatherCarousel peakName={props.peakName} />
            <RadarMap />
        </div>
    );
}

export default StatsPanel;
