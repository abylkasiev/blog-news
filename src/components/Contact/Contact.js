import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import maps from '../../container/img/contact-bg.png';
import facebook from '../../container/img/facebook.png'
import telegram from '../../container/img/telegram.png'
import twitter from '../../container/img/twitter.png'
import youtube from '../../container/img/youtube.png'
import whatsapp from '../../container/img/whatsapp.png'
import computer from '../../container/img/computer.png'
import './Contact.css'

function Contact(props) {
    return (
        <div className="contact">
            <div className="container">
                <div className="content">
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
                <div className="contact-cards">
                    <div className="card">
                        <h1 className="card-title">Контакты</h1>
                        <p className="bold-weight">пн-пт 10:00-19:00</p>
                        <p className="normal-weight">Bishkek, Kyrgyzstan</p>
                        <p className="bold-weight">Бесплатный звонок по Кыргызстану</p>
                        <p className="normal-weight">+996 (000) 000000</p>
                        <p className="card-email">welcome@mail.com</p>
                    </div>
                    <div className="card orange-card">
                        <h1 className="card-title">Адрес</h1>
                        <p className="bold-weight">720001</p>
                        <p className="normal-weight">Профессиональный лицей №98, <br/> 225 просп. Чуй, <br/> Бишкек, Кыргызстан</p>
                    </div>
                    <div className="card">
                        <h1 className="card-title">Соцсети</h1>
                        <div className="contact-icons">
                            <ul className="card-icons">
                                <li className="card-icon">
                                    <NavLink className="icon-link" to="/" exact>
                                        <img className="icon-img" src={facebook}/>
                                    </NavLink>
                                </li>
                                <li className="card-icon">
                                    <NavLink className="icon-link" to="/" exact>
                                        <img className="icon-img" src={telegram}/>
                                    </NavLink>
                                </li>
                                <li className="card-icon">
                                    <NavLink className="icon-link" to="/" exact>
                                        <img className="icon-img" src={twitter}/>
                                    </NavLink>
                                </li>
                                <li className="card-icon">
                                    <NavLink className="icon-link" to="/" exact>
                                        <img className="icon-img" src={youtube}/>
                                    </NavLink>
                                </li>
                                <li className="card-icon">
                                    <NavLink className="icon-link" to="/" exact>
                                        <img className="icon-img" src={whatsapp}/>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content">
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
            <div className="contact-map">
                <img className="map" src={maps}/>
            </div>
            <div className="container">
                <div className="questions-content">
                    <div className="questions-block">
                        <h2 className="question-title">Есть<br/>вопросы?</h2>
                        <p className="question-slogan">Заполните форму и мы свяжемся с вами <br/> в теление одного рабочего дня.</p>
                        <img className="computer" src={computer}/>
                    </div>
                    <div className="questions-form">
                        <form className="question-form">
                            <label className="question-label">Имя<input className="question-input" type="name" name="name" placeholder="Представьтесь пожалуйста"/></label>
                            <label className="question-label">Телефон<input className="question-input" type="number" name="number" placeholder="+996 (000) 000000"/></label>
                            <label className="question-label">Почта<input className="question-input" type="email" name="email" placeholder="mail@damain.kg"/></label>
                            <label className="question-label">Вопрос<textarea className="question-input question-textarea" placeholder="Ваш вопрос"></textarea></label>
                            <button className="add-btn question-btn">Отправить</button>
                            <p className="question-agree">Нажимая на кнопку «Отправить», я даю согласие на обработку персональных данных и соглашаюсь c политикой конфиденциальности</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;