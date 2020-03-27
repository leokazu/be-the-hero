import acios from 'axios';

const api= acios.create({
    baseURL: 'http://localhost:3333',
})

export default api;