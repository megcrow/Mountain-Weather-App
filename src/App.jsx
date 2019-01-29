import React from 'react';
import ReactDOM from 'react-dom';

import {
    WelcomeHeader
} from './components';

import './App.scss';

function App() {
	return (
		<div>
			<WelcomeHeader />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
