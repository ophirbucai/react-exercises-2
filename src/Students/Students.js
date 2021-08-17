import React, { useState } from 'react';
import './Students.css';

function Students() {

	const [students] = useState([
		'Joshua Miller',
		'Marc Feldman',
		'Ariana Grande',
		'Michael Jackson'
	]);

	return (
		<div className="Students">
			<h3>Students:</h3>
			<p>Display a bullet point list of all the `students` in the state.</p>
			<ul>
				{students.map((student, i) => <li key={i}>{student}</li>)}
			</ul>
		</div>
	)
}

export default Students;
