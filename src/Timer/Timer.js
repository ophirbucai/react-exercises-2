import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
	const [timer, setTimer] = useState(0);
	useEffect(() => {
		const sadf = setInterval(() => {
			setTimer(oldValue => oldValue + 1);
		}, 1000);
		return () => clearInterval(sadf);
	}, []);

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
			<div className="Timer__value">{timer}</div>
		</div>
	)
}

export default Timer;
