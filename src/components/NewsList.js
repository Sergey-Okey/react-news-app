import React from 'react';

const NewsList = ({ news }) => {
	return (
		<div>
			{news.map((article) => (
				<div key={article.id}>
					<h2>{article.webTitle}</h2>
					<p>{article.webPublicationDate}</p>
					{/* Add more details as needed */}
				</div>
			))}
		</div>
	);
};

export default NewsList;
