import axios from 'axios';

const clientAxios = axios .create({
    baseURL: 'http://localhost:4000/'         // Fake API json-server
});

export default clientAxios;