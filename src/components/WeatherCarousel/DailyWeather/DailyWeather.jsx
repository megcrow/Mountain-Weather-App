import React from 'react';
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

import './DailyWeather.scss'

function DailyWeather(props) {
    const {
        avyDanger,
        cloudCover,
        percentRain,
        percentSnow,
        percentTStorm,
        rating,
        windSpeed
    } = props;

    function generateVerbalRating() {
        let verbalRating;
        switch(true) {
            case rating > 80:
                verbalRating = 'Bluebird Day';
                break;
            case rating > 65:
                verbalRating = 'Sub-Optimal';
                break;
            case rating > 45:
                verbalRating = 'Risky';
                break;
            default:
                verbalRating = 'Danger';
        }
        return verbalRating;
    }

    return (
       <div className="todays-weather-container">
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <div className="rating">
                    <TiChartBarOutline /> {rating}
                    <p className="verbal-rating">{generateVerbalRating()}</p>
                </div>
                <div className="icon-container">
                    <div className="snow">
                        <TiWeatherSnow/> {`${percentSnow.toFixed()}%`}
                    </div>
                    <div className="cloud">
                        <TiWeatherCloudy/> {cloudCover}
                    </div>
                    <div className="avy">
                        <TiWarningOutline/> {avyDanger}
                    </div>
                    <div className="windy">
                        <TiWeatherWindy/> {`${windSpeed} mph`}
                    </div>
                    <div className="rain">
                        <TiWeatherShower/> {`${percentRain.toFixed()}%`}
                    </div>
                    <div className="tstorm">
                        <TiWeatherStormy/> {`${percentTStorm.toFixed()}%`}
                    </div>
                </div>
            </IconContext.Provider>
       </div>
    );
}

export default DailyWeather;
