import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

import {
    // Footer,
    MountainList,
    // PeakRankList,
    WelcomeHeader
} from './components';

import './App.scss';

function App() {
	return (
		<div>
			<WelcomeHeader />
			<MountainList />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
