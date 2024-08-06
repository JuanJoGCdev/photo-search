const API_URL = 'https://api.unsplash.com/photos/';
const API_URL_USER = 'https://api.unsplash.com/users';
const API_KEY = 'client_id=RgHpLuI4EC3HqFwe-tMxHbXXQu2lgt1GSqnoRMNgXj8';

const fetchData = async (endpoint = '') => {
    try {
        const response = await fetch(`${API_URL}${endpoint}${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
};

const fetchDataUser = async (endpoint = '') => {
    try {
        const response = await fetch(`${API_URL_USER}${endpoint}${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
};

export { fetchData, fetchDataUser };
