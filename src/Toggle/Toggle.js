import React, { useState } from 'react';
import logo from './logo.svg';
import './Toggle.css';

function Toggle() {
	const [isShown, setIsShown] = useState(true);

	return (
		<div className="Toggle">
			<p>Make the logo show and disappear when clicking on the button.</p>
			<button onClick={() => setIsShown(!isShown)}>Show / Hide</button>
			{isShown && <div className="Toggle__logo-wrapper">
				<img src={logo} alt="logo" />
			</div>}
		</div>
	)
}

export default Toggle;
