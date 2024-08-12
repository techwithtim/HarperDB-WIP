// src/components/Stats.jsx
import React from 'react';

const Stats = ({ cpm, elapsedTime }) => (
    <div className="stats">
        <h2>Characters Per Minute: {cpm}</h2>
        <h3>Elapsed Time: {elapsedTime.toFixed(1)} seconds</h3>
    </div>
);

export default Stats;
