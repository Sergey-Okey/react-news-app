import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
	const [topic, setTopic] = useState('');

	const handleSearch = () => {
		onSearch(topic);
	};

	return (
		<div>
			<input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default SearchForm;
