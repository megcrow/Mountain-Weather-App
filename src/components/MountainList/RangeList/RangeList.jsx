import React from "react";

import './RangeList.scss';

function RangeList(props) {
    const {
        range, 
        title
    } = props

    return (
       <div className="range-list-container">
            <div className="range-list-title">{title}</div>
            <div className="range-list-body">
                {range.map((peak, idx) => (
                    <li className="range-list-item" key={idx}>
                        <a className="peak-name" href={peak.url}>
                             {peak.name}
                        </a>
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
