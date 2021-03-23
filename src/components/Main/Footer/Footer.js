import React, { Component } from 'react';
import './Footer.css'
import {NavLink} from 'react-router-dom';
import facebook from '../../../container/img/facebook.png'
import telegram from '../../../container/img/telegram.png'
import twitter from '../../../container/img/twitter.png'
import youtube from '../../../container/img/youtube.png'
import whatsapp from '../../../container/img/whatsapp.png'
import logo from '../../../container/img/logo.png'


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="foot-up">
                    <div className="container">
                        <div className="foot">
                            <div className="foot-block">
                                <h3 className="footer-title">Меню</h3>
                                <ul className="foot-nav">
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/Main" exact>Главная</NavLink>
                                    </li>
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/News" exact>Новости</NavLink>
                                    </li>
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/Add" exact>Добавить</NavLink>
                                    </li>
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/Contact" exact>Контакты</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="foot-block">
                                <h3 className="footer-title">Новости</h3>
                                <ul className="foot-nav">
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/" exact>Свежие новости</NavLink>
                                    </li>
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/" exact>Новости зарубежные</NavLink>
                                    </li>
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/" exact>Актуальные новости</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="foot-block">
                                <h3 className="footer-title">Партнеры</h3>
                                <ul className="foot-nav">
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/" exact>Azattyk.kg</NavLink>
                                    </li>
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/" exact>Ala-Too24.kg</NavLink>
                                    </li>
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/" exact>Sputnik.kg</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="foot-block">
                                <h3 className="footer-title">О сайте</h3>
                                <ul className="foot-nav">
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/" exact>Наши проекты</NavLink>
                                    </li>
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/" exact>Наши услуги</NavLink>
                                    </li>
                                    <li className="foot-item">
                                        <NavLink className="foot-link" to="/" exact>Наши достижения</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="foot-down">
                    <div className="container footer-container">
                        <div className="footer-logo">
                            <img className="logo" src={logo}/>
                        </div>
                        <div className="soc-icons">
                            <ul className="icons">
                                <li className="icon">
                                    <NavLink className="icon-link" to="/" exact>
                                        <img className="icon-img" src={facebook}/>
                                    </NavLink>
                                </li>
                                <li className="icon">
                                    <NavLink className="icon-link" to="/" exact>
                                        <img className="icon-img" src={telegram}/>
                                    </NavLink>
                                </li>
                                <li className="icon">
                                    <NavLink className="icon-link" to="/" exact>
                                        <img className="icon-img" src={twitter}/>
                                    </NavLink>
                                </li>
                                <li className="icon">
                                    <NavLink className="icon-link" to="/" exact>
                                        <img className="icon-img" src={youtube}/>
                                    </NavLink>
                                </li>
                                <li className="icon">
                                    <NavLink className="icon-link" to="/" exact>
                                        <img className="icon-img" src={whatsapp}/>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="foot-data">
                            <p className="data">© 2018-2021 Global News</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;