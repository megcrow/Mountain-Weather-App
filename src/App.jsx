import React from 'react';
import ReactDOM from 'react-dom';

import {
	MountainList,
	RadarMap,
	WelcomeHeader,
	WeatherCarousel
} from './components';

import './App.scss';

function App() {
	return (
		<div>
			<WelcomeHeader />
			<div className="body-container">
				<MountainList />
				<div className="main">
					<WeatherCarousel />
					<RadarMap />
				</div>
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
