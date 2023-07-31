import React, { FC, useRef, useState, useEffect } from "react";
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

    const [playlist, setPlaylist] = useState<any[]>([]);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayList, setShowPlayList] = useState(false);
    const [playlistItem, setPlaylistItem] = useState(0);

    const musicCards = [
        { image: carti, title: "CARTI", genre: 'RAP', name: 'Sky', duration: '2m 04s', audio: Sky},
        { image: drake, title: 'DRAKE', genre: 'RAP', name: 'Non Stop', duration: '3m 06s', audio: Nonstop },
        { image: popsmoke, title: 'POP SMOKE', genre: 'RAP', name: 'Invincible', duration: '2m 07s', audio: Invincible},
        { image: yeat, title: 'YEAT', genre: 'RAP', name: 'On tha linë', duration: '2m 35s', audio: onThaLine },
    ];

    const addToPlaylist = (musicCard: any) => {
        setPlaylist((prevPlayList) => [...prevPlayList, musicCard]);
        setPlaylistItem(playlistItem +1);
    }

    const togglePlayList = () => {
        setShowPlayList(!showPlayList);
    }

    const clear = () => {
        setPlaylist([]);
        setPlaylistItem(0);
    }

    const handlePlayPause = (musicCard: any) => {
        if (audioRef.current) {
            if (audioRef.current.src === musicCard.audio) {
                setIsPlaying(prevIsPlaying => !prevIsPlaying);
                if (audioRef.current.paused) {
                    audioRef.current.play();
                } else {
                    audioRef.current.pause();
                }
            } else {
                if (!audioRef.current.paused) {
                    audioRef.current.pause();
                }
                audioRef.current.src = musicCard.audio;
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

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
                            <button 
                            onClick={togglePlayList} style={{ maxWidth: '350px' }} className='playlist-shown'>
                            SHOWPLAYLIST
                            <div className="red-surcle">{playlistItem}</div>
                        </button>
                        <div style={{marginTop: '-30px'}} className="flex flex-col gap-2 opacity-70 cursor-default">
                            <p className="">В этом месяце бесплатно</p>
                            <p className="">В следующем месяце 299</p>
                        </div>
                    </div>
                    <audio ref={audioRef} controls style={{ display: 'none' }} />
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
                    <div className="playlist-container-info">
                    <h1 className="music-text">Playlist</h1>
                    <div className="red-surcle-lg">{playlistItem}</div>
                    <button className="close-button" onClick={() => clear()}>Clear</button>
                    </div>
                    <div className="playlist-line"></div>
                    {playlist.map((item, index) => (
                        <div key={index} className="playlist-item">
                            <img className="playlist-img" src={item.image} alt={item.title} />
                            <button 
                            className="play-icon"
                            onClick={() => handlePlayPause(item)}
                            >
                                &#9654;
                            </button>
                                <p>{item.title}</p>
                                <p>{item.name}</p>
                                <p>{item.duration}</p>
                            </div>
                    ))}
                </div>
            </div>
        </div>
        {showPlayList && (
        <div style={{ fontFamily: 'font1' }} className="secondpage-container">
        <div className="vertical-line"></div>
            <div className="playlist-container1">
                <h1 className="music-text">Playlist</h1>
                <div className="buttons-container">
                    <button className="close-button" onClick={togglePlayList}>Close</button>
                    <button className="close-button" onClick={() => clear()}>Clear</button>
                </div>
                {playlist.map((item, index) => (
                <div key={index} className="playlist-item">
                <img className="playlist-img" src={item.image} alt={item.title} />
                <button
                className="play-icon"
                onClick={() => handlePlayPause(item)}
                >
                &#9654;
                </button>
            <p>{item.title}</p>
            <p>{item.name}</p>
            <p>{item.duration}</p>
            </div>
            ))}
        </div>
    </div>
)}
    </div>
  )
}

export default Music;
