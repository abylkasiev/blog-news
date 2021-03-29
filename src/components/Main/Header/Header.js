import React, { Component } from 'react';
import logo from '../../../container/img/logo.png'
import address from '../../../container/img/address.png'
import {NavLink} from 'react-router-dom';
import './Header.css'
import TagLink from '../../UI/TagLink/TagLink';


const Header = () => {
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
                                        <NavLink className="nav-link" to="/Main" exact>Главная</NavLink>
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
                                    <TagLink>News</TagLink>
                                    <TagLink>Кыргызстан</TagLink>
                                    <TagLink>События</TagLink>
                                    <TagLink>Сми</TagLink>
                                    <TagLink>Происшествия</TagLink>
                                    <TagLink>News</TagLink>
                                    <TagLink>Кыргызстан</TagLink>
                                    <TagLink>События</TagLink>
                                    <TagLink>Сми</TagLink>
                                    <TagLink>Происшествия</TagLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
};

export default Header;