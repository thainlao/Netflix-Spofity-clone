import React, { FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/music.css';
import carti from '../assets/carti.jpeg';
import popsmoke from '../assets/popsmoke.jpeg'
import drake from '../assets/drake.jpeg';
import yeat from '../assets/yeat.jpeg';

const Music: FC = () => {
    const navigate = useNavigate();
    const Sky = require("../assets/Sky.mp3");
    const Invincible = require("../assets/Invincible.mp3");
    const onThaLine = require("../assets/Onthaline.mp3");
    const Nonstop = require("../assets/Nonstop.mp3");

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [playlist, setPlaylist] = useState<any[]>([]);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const musicCards = [
        { image: carti, title: "CARTI", genre: 'RAP', name: 'Sky', duration: '2m 04s', audio: Sky},
        { image: drake, title: 'DRAKE', genre: 'RAP', name: 'Non Stop', duration: '3m 06s', audio: Nonstop },
        { image: popsmoke, title: 'POP SMOKE', genre: 'RAP', name: 'Invincible', duration: '2m 07s', audio: Invincible},
        { image: yeat, title: 'YEAT', genre: 'RAP', name: 'On tha linë', duration: '2m 35s', audio: onThaLine },
    ];

    const addToPlaylist = (musicCard: any) => {
        setPlaylist((prevPlayList) => [...prevPlayList, musicCard])
    }

    return (
        <div className="music-bg">
            <div className="music-container">
                <div className="music-main-container">
                    <h1 className="music-text">Главное</h1>
                    <div className="music-navbar">
                        <p className="navbar-component">ВСЁ</p>
                        <p className="navbar-component">НОВЫЕ РЕЛИЗЫ</p>
                        <p className="navbar-component">ЧАРТ</p>
                        <p className="navbar-component">ПОДБОРКИ</p>
                        <p className="navbar-component">НЕЙРОМУЗЫКА</p>  
                    </div>
                    <div className="line"></div>
                    <div className="music-main-wawe">
                        <div className="playlist">  
                            <p className="music-sub-text">▶</p>
                            <p className="music-sub-text">Моя Волна</p>
                        </div>
                        <button onClick={() => navigate('/login')} style={{ maxWidth: '350px'}} className='sub-button'>Подписаться</button>
                        <div style={{marginTop: '-30px'}} className="flex flex-col gap-2 opacity-70 cursor-default">
                            <p className="">В этом месяце бесплатно</p>
                            <p className="">В следующем месяце 299</p>
                        </div>
                    </div>
                    <div className="popular-now">
                        <p className="music-text">Популярное сегодня</p>
                        <div className="music-cards">
                            {musicCards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`music-card ${playlist.includes(card) ? 'selected' : ''}`}
                                    onClick={() => addToPlaylist(card)}
                                >
                                    <img src={card.image} className="music-card-img" alt="music-card-img" />
                                    <div className="music-card-text">
                                        <p className="music-card-maintext">{card.title}</p>
                                        <div className="music-card-subtext-line">
                                            <p className="music-card-subtext">{card.genre}</p>
                                            <div className="vertical-line"></div>
                                            <p className="music-card-subtext">{card.name}</p>
                                            <div className="vertical-line"></div>
                                            <p className="music-card-subtext">{card.duration}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{marginTop: '140px'}} className="line"></div>
                </div>
                <div style={{fontFamily: 'font1'}} className="secondpage-container">
                <div className="vertical-line"></div>
                <div className="playlist-container">
                    {playlist.map((item, index) => (
                        <div key={index} className="playlist-item">
                            <img className="playlist-img" src={item.image} alt={item.title} />
                            <button className="play-icon">&#9654;</button>
                                <p>{item.title}</p>
                                <p>{item.name}</p>
                                <p>{item.duration}</p>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Music;
