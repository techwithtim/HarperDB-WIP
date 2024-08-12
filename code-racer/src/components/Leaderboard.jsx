import React, { useState, useEffect } from 'react';
import { getScores } from '../api';


const Leaderboard = ({ snippet }) => {
    const [loading, setLoading] = useState(true)
    const [scores, setScores] = useState([])


    useEffect(() => {
        if (!snippet) return
        setLoading(true)
        getScores(snippet).then((scores) => setScores(scores)).finally(() => setLoading(false))
    }, [snippet])

    return (
        <div className="leaderboard-container">
            <h2>Leaderboard</h2>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Time (seconds)</th>
                        <th>CPM</th>
                    </tr>
                </thead>
                {!loading && <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{score.time}</td>
                            <td>{score.cpm}</td>
                        </tr>
                    ))}
                </tbody>}
            </table>
        </div>
    );
};

export default Leaderboard;
