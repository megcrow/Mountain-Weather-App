import React from 'react';
import ReactDOM from 'react-dom';

import {
	MountainWeatherInfo,
	WelcomeHeader,
} from './components';

import './App.scss';

function App() {
	return (
		<div>
			<WelcomeHeader />
			<MountainWeatherInfo />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
