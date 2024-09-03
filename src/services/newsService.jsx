import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;


console.log('API_KEY:', API_KEY);
console.log('BASE_URL:', BASE_URL);

export const fetchHealthNews = async (category = '') => {
    try {
        const response = await axios.get(`${BASE_URL}/everything`, {
            params: {
                q: 'health',
                category,
                apiKey: API_KEY,
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching health news:', error);
        return [];
    }
};
