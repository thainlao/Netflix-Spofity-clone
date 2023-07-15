import React, { FC } from "react";
import '../styles/Mainimg.css'
import '../styles/Cardscontainers.css';
import photo1 from '../assets/ph1.jpg';
import photo2 from '../assets/ph2.jpg';
import photo3 from '../assets/ph3.jpg';
import photo4 from '../assets/ph4.jpg';

const TextandPic: FC = () => {
    const text = 'Our goal is to give you access to millions of songs and movies. Just turn on and enjoy';

    return (
        <div style={{ marginBottom: '20px'}}>
        <div className="flex justify-center items-center">
          <div className="text-center py-6">
            <p style={{ fontFamily: 'font1' }} className="xl:text-4xl text-3xl">
              {text}
            </p>
          </div>
        </div>
        <div className="cards-container">
          <div className="card">
            <img src={photo1} alt="Card 1" className="card-image" />
            <div className="card-overlay">
              <p className="card-text">Card 1 Text</p>
            </div>
          </div>
          <div className="card">
            <img src={photo2} alt="Card 2" className="card-image" />
            <div className="card-overlay">
              <p className="card-text">Card 2 Text</p>
            </div>
          </div>
          <div className="card">
            <img src={photo3} alt="Card 3" className="card-image" />
            <div className="card-overlay">
              <p className="card-text">Card 3 Text</p>
            </div>
          </div>
          <div className="card">
            <img src={photo4} alt="Card 4" className="card-image" />
            <div className="card-overlay">
              <p className="card-text">Card 4 Text</p>
            </div>
          </div>
        </div>
      </div> 
    )
}

export default TextandPic;