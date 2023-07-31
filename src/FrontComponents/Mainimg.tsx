import React, { FC, useState, useEffect } from 'react'
import photo from '../assets/bg3.jpg';
import '../styles/Mainimg.css';
import TextandPic from './TextandPic';
import End from './End';
import { useNavigate } from 'react-router-dom';

const Mainimg: FC = () => {
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
          const scrolled = window.scrollY;
          setShowButton(scrolled >= 450);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const handleLearnMore = () => {
        navigate('/subscribe');
      };

    return (
        <div> 
                <div className='flex justify-center items-center'>
                    <div
                        style={{ backgroundImage: `url(${photo})`, backgroundSize: 'cover' }}
                        className='photo-container w-full flex justify-center'
                        >
                        <div className='flex items-center flex-col gap-5'>      
                        <p 
                        style={{ fontFamily: 'font1'}}
                        className='text-white lg:text-5xl md:text-4xl text-3xl py-6'
                        >Enjoy and feel free here</p>
                        <p 
                        style={{ fontFamily: 'font4', mixBlendMode: 'overlay'}}
                        className='text-[white] lg:text-5xl md:text-4xl text-3xl'
                        >follow our growing community</p>
                    </div>    
                    </div>
                </div>
            <TextandPic />
            <End /> 
            <div className='middle-but'>
                <button 
                    className={`learn-more-button ${showButton ? 'show opacity-transition transform-transition' : ''}`} onClick={handleLearnMore}>
                    Узнать больше
                </button>
            </div> 
      </div>
    )
}

export default Mainimg;