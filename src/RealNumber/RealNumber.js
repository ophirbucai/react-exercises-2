import React, {useCallback, useState} from 'react';
import './RealNumber.css';

function RealNumber() {
	const [isValidInput, setIsValidInput] = useState(false);
	const checkIsValidInput = useCallback(e => {
		setIsValidInput(e.target.value.match(/^\d+$/));
	});

	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>
			<input type="text" className="text-box" onChange={checkIsValidInput} />
			{isValidInput && <button>Submit</button>}
		</div>
	)
}

export default RealNumber;
