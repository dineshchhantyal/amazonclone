import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'http://localhost:5001/clone-82d90/us-central1/api' //cloud function
    }
);

export default instance;