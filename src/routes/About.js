import React from "react";
import './About.scss'
import mail from './../mail.svg'
import github from './../github.svg'

function About() {
    return (
        <div className="about">
            <h1 className="about__title">О проекте</h1>
            <p className="about__text">
            Это учебный проект каталога фильмов, реализованный на React JS. <br />
            Описание проекта: <br />
            Это Single Page application. Написано с использованием Классовых Компонентов (Class Components). Получение фильмов по API <a href="https://yts.mx/api#list_movies">https://yts.mx/api#list_movies</a>. Для запросов API использовалась библиотека Axios. Маршрутизация была построена с помощью react router dom version 5.3.4. Для написания стилей компонентов использовался препроцессор SASS(SCSS).
            </p>
            <ul className="about__keywords">
                <li>React js</li>
                <li>Class components</li>
                <li>props</li>
                <li>state</li>
                <li>axios</li>
                <li>API</li>
                <li>React Router</li>
                <li>PropTypes</li>
                <li>SСSS</li>
            </ul>
            <div className="about__message">
                <div className="about__message-text">
                    Связаться со мной
                </div>
                <div className="about__git">
                    <a href="https://github.com/horoshere">
                        <img src={github} alt="github" />
                    </a>
                </div>
                <div className="about__mail">
                    <a href="mailto:nikolayeremeev@internet.ru">
                        <img src={mail} alt="mail" />
                    </a>
                </div>
                </div>
                
        </div>
    )
}

export default About;