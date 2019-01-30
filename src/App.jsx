import React from 'react';
import ReactDOM from 'react-dom';

import {
	MountainList,
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
