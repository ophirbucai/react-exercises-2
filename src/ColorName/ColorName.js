import React  from 'react';
import './ColorName.css';
import Colorize from './Colorize/Colorize';

function ColorName() {
	return (
		<div className="ColorName">
			<p>
				Create a new component named <code>Colorize</code> under this component.
				The component should receive a prop with a color name (like "blue") and
				present the word with the corresponding color.<br /><br />
				Examples: <span className="color--red">red</span> <span className="color--blue">blue</span>
			</p>
			<Colorize color="blue" />
		</div>
	)
}

export default ColorName;
