import React, { FC } from 'react'
import Navbar from './Navbar';
import photo from '../assets/bg.png';
import '../styles/Mainimg.css';
import TextandPic from './TextandPic';
import End from './End';

const Mainimg: FC = () => {
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
                        style={{ fontFamily: 'font4'}}
                        className='text-white lg:text-3xl md:text-2xl text-xl'
                        >follow our growing community</p>
                    </div>    
                    </div>
                </div>
            <TextandPic />
            <End />    
      </div>
    )
}

export default Mainimg;