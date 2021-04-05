import React, { Component } from 'react';
import axios from '../../apishka/axios-firebase';
import Post from '../Main/Post/Post'
import './News.css'

class News extends Component {

    state = {
        results: []
    }

    handleDeleteElement = id => {
        axios.delete(`/news/${id}.json`).then(() => {
            this.setState(prevState => ({
                results: prevState.results.filter(post => post.id !=id)
            }));
        })
      };

    componentDidMount(){
        axios.get('/news.json')
        .then (response => {
            const fetchedResults = [];
            for(let key in response.data){
                fetchedResults.unshift(
                    {
                        ...response.data[key],
                        id:key,
                        collapse: false
                    }
                )
            }
            this.setState({results:fetchedResults})
        })
    }

    collapseToggle = id => {
        const index = this.state.results.findIndex(item => item.id === id);
        const results = [...this.state.results];
        const item = {...this.state.results[index]};

        item.collapse = !item.collapse;

        results[index] = item;

        this.setState({results});
    }

    render() {
        return (
            <div className="news-blocks">
                <div className="container">
                    <div className="news-cards">
                        {
                            this.state.results.length > 0 ?
                            this.state.results.map(post => {
                                return <Post 
                                            key={post.id} 
                                            post={post} 
                                            remove={() => this.handleDeleteElement(post.id)}
                                            collapse={() => this.collapseToggle(post.id)}
                                        />

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