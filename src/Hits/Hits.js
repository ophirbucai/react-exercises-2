import React, { useState, useEffect } from 'react';
import './Hits.css';

function Hits() {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json')
			.then(res => res.json())
			.then(data => setArticles(data));
	})

	return (
		<div className="Hits">
			<h3>Hits:</h3>
			<p>
				Use the following API to make a list of hit titles:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json</code>
			</p>
			<ul>
				{articles.map((article, i) => <li key={i}>{article.title}</li>)}
			</ul>
		</div>
	)
}

export default Hits;
