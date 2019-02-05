import React from 'react';

import MountainList from './MountainList/MountainList.jsx';
import StatsPanel from './StatsPanel/StatsPanel.jsx';
import './MountainWeatherInfo.scss';

class MountainWeatherInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            peakName: 'Grays Peak'
        }
    }

    _onClick = (peakName) => {
        this.setState(() => ({ peakName }));
    }

    render() {
        return (
            <div className="mountain-weather-info-container">
                <MountainList onClick={this._onClick} />
                <StatsPanel peakName={this.state.peakName} />
            </div>
        );
    }
}

export default MountainWeatherInfo;
