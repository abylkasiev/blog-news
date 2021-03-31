import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://news-blog-e422b-default-rtdb.firebaseio.com/'
})

export default instance