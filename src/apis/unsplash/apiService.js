const API_URL = 'https://api.unsplash.com/photos/';
const API_KEY = 'client_id=2RwjvTe7xUWPW0J2xqHexH3RTaAoSxF5ctViQSLsBm0';

const fetchData = async (endpoint = '') => {
    try {
        const response = await fetch(`${API_URL}${endpoint}${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
};

export default fetchData;