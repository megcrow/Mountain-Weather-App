import React from 'react';
import moment from 'moment';
import {
    TiChartBarOutline,
    TiWarningOutline,
    TiWeatherCloudy,
    TiWeatherShower,
    TiWeatherSnow,
    TiWeatherStormy,
    TiWeatherWindy
} from 'react-icons/ti';

import { IconContext } from "react-icons";

import './TodaysWeather.scss'

function TodaysWeather() {
    const today = moment().format('MMMM Do');
    const tomorrow = moment().add(1, 'day')

    return (
       <div className="todays-weather-container">
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <h1 className="date">
                    Today, {today}
                </h1>
                <div className="rating">
                    <TiChartBarOutline /> 84
                    <p className="verbal-rating">Bluebird Day</p>
                </div>
                <div className="icon-container">
                        <div className="snow">
                            <TiWeatherSnow/> 0%
                        </div>
                        <div className="cloud">
                            <TiWeatherCloudy/> Clear
                        </div>
                        <div className="avy">
                            <TiWarningOutline/> 2-Moderate
                        </div>
                        <div className="windy">
                            <TiWeatherWindy/> 20 mph
                        </div>
                        <div className="rain">
                            <TiWeatherShower/> 2%
                        </div>
                        <div className="tstorm">
                            <TiWeatherStormy/> 0%
                        </div>
                </div>
            </IconContext.Provider>
    </div>
    );
}

export default TodaysWeather;
