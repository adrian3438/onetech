import axios from "axios";

const instance = axios.create({
    //baseURL : 'http://dkloknext.localhost/api/controller',
    baseURL : 'https://marineplaza.org/onetech-api/controller',
})

export default instance;
