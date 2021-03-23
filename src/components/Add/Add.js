import React, { Component } from 'react';
import './Add.css'

class Add extends Component {
    render() {
        return (
            <div className="add">
                <div className="container">
                    <h1 className="add-title">Прислать новость на сайт</h1>
                    <form className="form">
                        <div className="form-inputs">
                            <label className="add-form-title">Заголовок<input className="add-form-input" type="text" name="text" placeholder="Веедите заголовок"/></label>
                            <label className="add-form-title">Ваша почта<input className="add-form-input" type="email" name="email" placeholder="Введите email почту"/></label>
                            <p className="add-form-title">Добавить фото</p>
                            <label className="add-form-img">Выберите файл<input className="add-form-input"  type="file" name="file"/></label>
                            <button className="add-btn">Отправить</button>
                        </div >
                        <div className="form-textarea"><label className="add-form-title">Tекст<textarea className="add-form-textarea" placeholder="Введите текст..."></textarea></label></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Add;