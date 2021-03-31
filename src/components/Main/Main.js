import React, { Component } from 'react';
import './Main.css'
import axios from '../../apishka/axios-firebase';
import Post from './Post/Post';


class Main extends Component {
    state = {
        results: []
    }

    componentDidMount(){
        axios.get('/news.json?orderBy="heading"&limitToLast=3')
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
            <div className="main">
                <div className="content">
                    <div className="container">
                        <p className="contact-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <p className="contact-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <p className="contact-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                </div>
                <div className="grey-block">
                    <div className="container">
                        <h1 className="fresh-news">Свежие новости</h1>
                    </div>
                </div>
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
            </div>
        );
    }
}

export default Main;