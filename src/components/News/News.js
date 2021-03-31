import React, { Component } from 'react';
import axios from '../../apishka/axios-firebase';
import Post from '../Main/Post/Post'

class News extends Component {

    state = {
        results: []
    }

    componentDidMount(){
        axios.get('/news.json')
        .then (response => {
            console.log(response.data);
            const fetchedResults = [];
            for(let key in response.data){
                fetchedResults.unshift(
                    {
                        ...response.data[key],
                        id:key
                    }
                )
            }
            this.setState({results:fetchedResults})
        })
    }

    render() {
        return (
            <div className="news-blocks">
                <div className="container">
                    <div className="news-cards">
                        {
                            this.state.results.length > 0 ?
                            this.state.results.map(post => {
                                return <Post key={post.id} post={post} />

                            }) : 
                            <h3>Нет постов</h3>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default News;