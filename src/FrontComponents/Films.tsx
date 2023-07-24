import React, { FC, useState, useEffect } from "react";
import '../styles/Films.css';
import filming from '../assets/filmimg.png';
import filming2 from '../assets/filming2.jpeg';
import filming3 from '../assets/filmimg3.jpeg';
import filming4 from '../assets/filmimg4.jpg';
import filming5 from '../assets/filmimg5.jpeg';
import filming6 from '../assets/filmimg6.jpeg';
import filming7 from '../assets/filmimg7.jpg';
import filming8 from '../assets/filmimg8.jpeg';
import filming9 from '../assets/filmimg9.jpeg';
import filming10 from '../assets/filmimg5.jpeg';
import wl1 from '../assets/phon2.jpeg';
import wl2 from '../assets/phone1.jpeg';

const Films: FC = () => {
    const [activeFilmIndex, setActiveFilmIndex] = useState(0);
    const [activeImage, setActiveImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);


    const films = [ 
        { image: filming, title: "Oppenheimer", price: '4. 99$', duratin: '1h 34m', Rating: '2/10',},
        { image: filming2, title: "Barbie", price: 'FREE', duratin: '1h 34m', Rating: '8.5/10',},
        { image: filming3, title: "Interstellar", price: '9. 99$', duratin: '1h 34m', Rating: '2/10',},
        { image: filming4, title: "Taxi Driver", price: '6. 99$', duratin: '1h 34m', Rating: '9/10',},
        { image: filming5, title: "Saw", price: '1.00$', duratin: '1h 34m', Rating: '8.5/10',},
        { image: filming6, title: "Sigma Male", price: '5.00$', duratin: '1h 34m', Rating: '8.5/10',},
        { image: filming7, title: "Fight Club", price: '9. 99$', duratin: '1h 34m', Rating: '8.5/10',},
        { image: filming8, title: "Your Name", price: 'FREE', duratin: '1h 34m', Rating: '8.5/10',},
        { image: filming9, title: "Death Note", price: 'FREE', duratin: '1h 34m', Rating: '8.5/10',},
        { image: filming10, title: "Film 10", price: '9. 99$', duratin: '1h 34m', Rating: '8.5/10',},
    ];

    const images = [filming2, wl1, wl2, filming3, filming8];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000)

        return () => clearInterval(interval)
    }, [images.length]);

    const handlePrevCard = () => {
        if (activeFilmIndex === 0) {
            setActiveFilmIndex(5);
        } else if (activeFilmIndex === 6) {
            setActiveFilmIndex(10);
        } else {
            setActiveFilmIndex(activeFilmIndex - 1);
        }
    };

    const handleNextCard = () => {
        if (activeFilmIndex === 5) {
            setActiveFilmIndex(1);
        } else if (activeFilmIndex === 10) {
            setActiveFilmIndex(6);
        } else {
            setActiveFilmIndex(activeFilmIndex + 1);
        }
    };

    const handleCardEnter = () => {
        setIsHovered(true);
      };
    
      const handleCardLeave = () => {
        setIsHovered(false);
      };

    return (
        <div className="filmsbody">
            <div className="container">
                    <p className="text-white text-3xl py-5" style={{ fontFamily: 'font1'}}>
                        What you want to see today?
                    </p>
                    <div className="film-swiper-container">
                    <img className="img" src={images[activeImage]} alt='Opperheimer' />
                    <div className="image-indicators">
                        {images.map((image, index) => (
                            <div key={index} className={`image-indicator ${activeImage === index ? 'active' : ''}`} />
                        ))}
                    </div>
                </div>
                <div className="buttons">
                    <button className="btn">30 Дней Подписки</button>
                    <button className="btn">Активировать сертификат</button>
                </div>
                <div className="textper">
                    <p className="text">Онлайн-кинотеатр Thainlao: фильмы в хорошем качестве всегда приносят настоящее удовольствие</p>
                    <p className="textchild"> Случалось ли вам отказаться от просмотра интересного фильма из-за того, что его показывали в неудобное время? Приходилось ли искать в сети интернет, где смотреть фильмы онлайн? А спорить с домашними из-за выбора кино для просмотра по ТВ?
                        Все эти проблемы остались в прошлом! Откройте для себя фильмы онлайн в HD-качестве с кинотеатром Иви. Мы не просто освобождаем вас от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.</p>
                </div>
                <p className="text" style={{ fontFamily: 'font1'}}>
                    Top 10 Movies of the Week
                </p>
                <div className="filmcards-container">
                {films.slice(activeFilmIndex, activeFilmIndex + 4).map((film, index) => (
                        <div key={index} className="filmcard" style={{ position: 'relative'}}>
                            <img className="border" src={film.image} alt={film.title}/>
                            <h3 className="film-tittle1">{film.title}</h3>
                            <button className="buy-button">Add</button>
                            <h3 className="film-tittle">Price: {film.price}</h3>
                            <h3 className="film-tittle">Duration: {film.duratin}</h3>
                            <div className="rating-bar">
                                <div className="filled-rating" style={{ width: `${parseFloat(film.Rating) * 10}%` }} />
                            </div>
                            <h3 style={{ marginBottom: '18px'}} className="film-tittle">Score: {film.Rating}</h3>
                            </div>
                    ))}
                </div>
                <div className="card-navigation">
                    <button onClick={handlePrevCard}>Предыдущая</button>
                    <button onClick={handleNextCard}>Следующая</button>
                </div>
            </div>
        </div>
    )
}

export default Films;
