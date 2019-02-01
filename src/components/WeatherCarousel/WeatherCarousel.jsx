import React from "react";

import './WeatherCarousel.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import TodaysWeather from './TodaysWeather/TodaysWeather.jsx'
import TomorrowsWeather from './TomorrowsWeather/TomorrowsWeather.jsx'

function WeatherCarousel() {
  	return(
		<div className="carousel-container">
			<h1 className="carousel-header">Grays Peak</h1>
			<div className="carousel-body">
				<Carousel 
					showThumbs={false}
					showStatus={false}
					>
					<div className="today-weather">
						<TodaysWeather />
						<TodaysWeather />
					</div>
					<div className="today-weather">

					</div>
				</Carousel>
			</div>
		</div>
	);
}
export default WeatherCarousel;
