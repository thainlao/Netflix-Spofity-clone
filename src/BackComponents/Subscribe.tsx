import React, {FC} from 'react'
import '../styles/subscribe.css';
import '../styles/Mainimg.css';

const Subscribe: FC = () => {
    return (
        <div className='subscribe flex justify-center items-center'>
        <div 
        style={{ fontFamily: 'font2'}}
        className='subcards lg:gap-14'>
          <div className='subcard-vip flex flex-col rounded-lg gap-8'>
          <p className='text-black text-2xl font-bold'>VIP Plan</p>
            <p className='text-black text-2xl font-bold'>1 Mounth</p>
            <p className='text-black text-2xl font-bold'>Download</p>
            <p className='text-black text-3xl font-bold'>23.99$</p>
            <button 
            className='w-36 rounded-full h-12 buy
            hover:text-[white]
            '>BUY</button>
          </div>
          <div className='subcard-free flex flex-col rounded-lg gap-8'>
            <p className='text-black text-2xl font-bold'>Free Plan</p>
            <p className='text-black text-2xl font-bold'>1h Fils</p>
            <p className='text-black text-2xl font-bold'>1h Music</p>
            <p className='text-black text-3xl font-bold'>FREE</p>
            <button 
            className='w-36 rounded-full h-12
            hover:text-[#fcfcfc]
            border-[grey] buy'>BUY</button>
          </div>
          <div className='subcard-extra flex flex-col rounded-lg gap-8'>
          <p className='text-black text-2xl font-bold'>Extra Plan</p>
            <p className='text-black text-2xl font-bold'>Lifetime Pass</p>
            <p className='text-black text-2xl font-bold'>Web App</p>
            <p className='text-black text-3xl font-bold'>99.99$</p>
            <button 
            className='w-36 rounded-full h-12
            hover:text-[white] buy
            border-[1px]'>BUY</button>
          </div>
        </div>
      </div>
    )
}

export default Subscribe;