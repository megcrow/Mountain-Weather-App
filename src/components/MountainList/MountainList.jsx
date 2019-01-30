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
} from '../../constants.js';
import './MountainList.scss';

function MountainList() {
    return (
       <div className="mountain-list-container">
            <RangeList range={FRONT} title="Front Range" />
            <RangeList range={TEN_MILE} title="Tenmile Range" />
            <RangeList range={MOSQUITO} title="Mosquito Range" />
            <RangeList range={SAWATCH} title="Sawatch Range" />
            <RangeList range={ELK} title="Elk Range" />
            <RangeList range={SAN_JUAN} title="San Juan Range" />
            <RangeList range={SANGRE_DE_CRISTO} title="Sangre de Cristo Range" />
       </div>
    );
}

export default MountainList;
