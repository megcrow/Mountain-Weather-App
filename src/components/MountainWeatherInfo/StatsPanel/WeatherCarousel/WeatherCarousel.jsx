import React from 'react';
import moment from 'moment';

import DailyWeather from './DailyWeather/DailyWeather.jsx';
import './WeatherCarousel.scss';

function WeatherCarousel(props) {
	const today = moment().format('MMMM Do');
	const tomorrow = moment().add(1, 'd').format('MMMM Do');

	function calculateDangerIndex(cloud, windSpeed, snow, rain, tstorm, avy) {
		const cloudWeight = 0.01 * cloud;
		const snowWeight = 0.3 * snow;
		const rainWeight = 0.04 * rain;
		const tStormWeight = 0.3 * tstorm;
		const avyWeight = 0.19 * avy;
		const windWeight = 0.16 * windSpeed;
		return cloudWeight + windWeight + snowWeight + rainWeight + tStormWeight + avyWeight;
	}

    function generateConditions() {
        const percentSnow = Math.random() * 100;
        const percentRain = Math.random() * 100;
        const percentTStorm = Math.random() * 100;
        const windSpeed = Math.floor(Math.random() * 81)
        const avyDangerList = ['1 - Low', '2 - Moderate', '3 - Considerable', '4 - High', '5 - Extreme'];
		const avyIndex = Math.floor(Math.random() * 5);
		const avyDanger = avyDangerList[avyIndex];
		const cloudCoverList = ['Clear', 'Cloudy', 'Partially Cloudy'];
		const cloudIndex = Math.floor(Math.random() * 3);
        const cloudCover = cloudCoverList[cloudIndex];
        const rating = 100-calculateDangerIndex(cloudIndex, windSpeed, percentSnow, percentRain, percentTStorm, avyIndex).toFixed();

        return {
            avyDanger,
            cloudCover,
            percentRain,
            percentSnow,
            percentTStorm,
			rating,
			windSpeed
        }
	}

  	return(
		<div className="carousel-container">
			<h1 className="carousel-header">{props.peakName}</h1>
			<div className="carousel-body">
					<div className="today-weather">
						<div className="date-and-weather">
							<h1 className="date">Today, {today}</h1>
							<DailyWeather {...generateConditions()} />
						</div>
						<div className="date-and-weather">
							<h1 className="date">Tomorrow, {tomorrow}</h1>
							<DailyWeather {...generateConditions()} />
						</div>
					</div>
			</div>
		</div>
	);
}
export default WeatherCarousel;
