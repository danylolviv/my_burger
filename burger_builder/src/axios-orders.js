import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://awsome-burger-builder-366f5.firebaseio.com/'
})

export default instance;