import React, { Component } from 'react';
import logo from '../../../container/img/logo.png'
import address from '../../../container/img/address.png'
import {NavLink} from 'react-router-dom';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="wrap">
                <header className="header">
                    <div className="header__up">
                        <div className="container header__up-container">
                            <img className="logo" src={logo}/>
                            <a href="#" className="address top-title"><img src={address}/> Bishkek, Kyrgyzstan</a>
                            <p className="worktime">пн-пт<br/>10:00-19:00</p>
                            <a href="#" className="email top-title">welcome@mail.com</a>
                            <button className="signup">Sign up</button>
                            <a href="#" className="number">+996 (000) 000000<br/><p className="free-call top-title">Бесплатный звонок</p></a>
                        </div>
                    </div>
                    <div className="header__down">
                        <div className="container">
                            <div className="header__nav">
                                <ul className="nav">
                                    <li className="nav__item">
                                        <NavLink className="nav-link" to="/" exact>Главная</NavLink>
                                    </li>
                                    <li className="nav__item">
                                        <NavLink className="nav-link" to="/News" exact>Новости</NavLink>
                                    </li>
                                    <li className="nav__item">
                                        <NavLink className="nav-link" to="/Add" exact>Добавить</NavLink>
                                    </li>
                                    <li className="nav__item">
                                        <NavLink className="nav-link" to="/Contact" exact>Контакты</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header__bg">
                        <div className="container">
                            <div className="header-info">
                                <h1 className="header-title">Новости</h1>
                                <div className="hashtags">
                                    <a className="btn btn--svg js-animated-button" href="#project"><span className="btn--svg__label">#News</span>
                                        <svg className="btn--svg__circle" width="190" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveaspectratio="none" viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="190">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a className="btn btn--svg js-animated-button" href="#project"><span className="btn--svg__label">#Кыргызстан</span>
                                        <svg className="btn--svg__circle" width="190" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveaspectratio="none" viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="190">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a className="btn btn--svg js-animated-button" href="#project"><span className="btn--svg__label">#События</span>
                                        <svg className="btn--svg__circle" width="190" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveaspectratio="none" viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="190">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a className="btn btn--svg js-animated-button" href="#project"><span className="btn--svg__label">#Сми</span>
                                        <svg className="btn--svg__circle" width="190" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveaspectratio="none" viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="190">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a className="btn btn--svg js-animated-button" href="#project"><span className="btn--svg__label">#Происшествия</span>
                                        <svg className="btn--svg__circle" width="190" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveaspectratio="none" viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="190">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a className="btn btn--svg js-animated-button" href="#project"><span className="btn--svg__label">#News</span>
                                        <svg className="btn--svg__circle" width="190" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveaspectratio="none" viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="190">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a className="btn btn--svg js-animated-button" href="#project"><span className="btn--svg__label">#Кыргызстан</span>
                                        <svg className="btn--svg__circle" width="190" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveaspectratio="none" viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="190">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a className="btn btn--svg js-animated-button" href="#project"><span className="btn--svg__label">#События</span>
                                        <svg className="btn--svg__circle" width="190" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveaspectratio="none" viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="190">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a className="btn btn--svg js-animated-button" href="#project"><span className="btn--svg__label">#Сми</span>
                                        <svg className="btn--svg__circle" width="190" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveaspectratio="none" viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="190">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a className="btn btn--svg js-animated-button" href="#project"><span className="btn--svg__label">#Происшествия</span>
                                        <svg className="btn--svg__circle" width="190" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveaspectratio="none" viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="190">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;