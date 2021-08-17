import React, { useCallback, useState } from 'react';
import './Counter.css';

function Counter() {
	const [count, setCount] = useState(0);
	const increase = useCallback(() => {
		setCount(oldValue => oldValue + 1)
	});

	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button onClick={increase}>Increase</button>
			<div className="Counter__value">{count}</div>
		</div>
	)
}

export default Counter;
