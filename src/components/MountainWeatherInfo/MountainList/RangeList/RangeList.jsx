import React from "react";

import './RangeList.scss';

function RangeList(props) {
    const {
        range, 
        title,
        onClick
    } = props

    return (
       <div className="range-list-container">
            <div className="range-list-title">{title}</div>
            <div className="range-list-body">
                {range.map((peak, idx) => (
                    <li className="range-list-item" key={idx}>
                        <span
                            role="button"
                            className="peak-name"
                            onClick={() => onClick(peak.name)}
                        >
                             {peak.name}
                        </span>
                        <span className="peak-elevation">
                            {peak.elevation.toLocaleString()}'
                        </span>
                    </li>
                ))}
            </div>
       </div>
    );
}

export default RangeList;
