import axios from 'axios';

const instace = axios.create({
    baseURL: 'https://news-blog-e422b-default-rtdb.firebaseio.com/'
})

export default instace