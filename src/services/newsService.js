import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://content.guardianapis.com';

const getNews = async (topic, page = 1) => {
	try {
		const response = await axios.get(`${BASE_URL}/search?q=${topic}&page=${page}&api-key=${API_KEY}`);
		return response.data.response;
	} catch (error) {
		console.error('Error fetching news:', error);
		return null;
	}
};

export default getNews;
