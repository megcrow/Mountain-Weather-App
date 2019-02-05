import React from 'react';

import RangeList from './RangeList/RangeList.jsx';
import {
    ELK,
    FRONT,
    MOSQUITO,
    SANGRE_DE_CRISTO,
    SAN_JUAN,
    SAWATCH,
    TEN_MILE
} from '../../../constants.js';
import './MountainList.scss';

function MountainList(props) {
    function _onClick(peakName) {
        props.onClick(peakName);
    }

    return (
       <div className="mountain-list-container">
            <RangeList
                range={FRONT}
                title="Front Range"
                onClick={_onClick}
            />
            <RangeList
                range={TEN_MILE}
                title="Tenmile Range"
                onClick={_onClick}
            />
            <RangeList
                range={MOSQUITO}
                title="Mosquito Range"
                onClick={_onClick}
            />
            <RangeList
                range={SAWATCH}
                title="Sawatch Range"
                onClick={_onClick}
            />
            <RangeList
                range={ELK}
                title="Elk Range"
                onClick={_onClick}
            />
            <RangeList
                range={SAN_JUAN}
                title="San Juan Range"
                onClick={_onClick}
            />
            <RangeList
                range={SANGRE_DE_CRISTO}
                title="Sangre de Cristo Range"
                onClick={_onClick}
            />
       </div>
    );
}

export default MountainList;
