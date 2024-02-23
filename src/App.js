import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import getNews from './services/newsService';
import SearchForm from './components/SearchForm';
import NewsList from './components/NewsList';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
	const [news, setNews] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTopic, setSearchTopic] = useState('');

	const handleSearch = async (topic) => {
		setSearchTopic(topic);
		setCurrentPage(1);
	};

	const handlePageChange = async (page) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		const fetchNews = async () => {
			const response = await getNews(searchTopic, currentPage);
			if (response) {
				setNews(response.results);
				setTotalPages(response.pages);
			}
		};

		fetchNews();
	}, [searchTopic, currentPage]);

	return (
		<Router>
			<div>
				<SearchForm onSearch={handleSearch} />
				<Switch>
					<Route path="/" exact>
						<NewsList news={news} />
						<Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
