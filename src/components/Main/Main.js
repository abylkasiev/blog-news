import React, { Component } from 'react';
import './Main.css'
import newsPicture from '../../container/img/news-1.jpg'

class Main extends Component {
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
                            <div className="news-block">
                                <img className="newsPicture" src={newsPicture}/>
                                <h3 className="news-heading">Заголовок</h3>
                                <p className="news=info-text">Информационнный текст</p>
                                <a className="read-more">Подробнее</a>
                            </div>
                            <div className="news-block">
                                <img className="newsPicture" src={newsPicture}/>
                                <h3 className="news-heading">Заголовок</h3>
                                <p className="news=info-text">Информационнный текст</p>
                                <a className="read-more">Подробнее</a>
                            </div>
                            <div className="news-block">
                                <img className="newsPicture" src={newsPicture}/>
                                <h3 className="news-heading">Заголовок</h3>
                                <p className="news=info-text">Информационнный текст</p>
                                <a className="read-more">Подробнее</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;