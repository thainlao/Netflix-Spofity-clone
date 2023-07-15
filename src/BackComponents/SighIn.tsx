import React, { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.css';
import '../styles/Mainimg.css';
import Cookies from 'js-cookie';
import '../styles/Modals.css';

const SignIn: FC = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState('');

    const handleRegistration = () => {
      const existingUserString = Cookies.get('user')

      if (existingUserString) {
        const existingUser = JSON.parse(existingUserString);
        if (existingUser.email === email || existingUser.username === username) {
          setModalMessage('e-mail/Username is already exist');
          setModalType('error');
          setShowModal(true);
          setPassword('');
          setUsername('');
          setEmail('');
          return;
      }
    }

    const newUser = { email, username, password};
    Cookies.set('user', JSON.stringify(newUser))
    setModalMessage('Success Registration!')
    setModalType('success');
    setShowModal(true);
    setPassword('');
    setUsername('');
    setEmail('');
  }
    return (
        <div className='loginbg flex items-center justify-center'>
        <div className='logincontainer'>
          <div className='flex justify-center gap-9 items-center flex-col'>
            <p style={{ fontFamily: 'font1' }} className='text-white text-5xl py-8'>
              Thainlao Store
            </p>
            <p style={{ fontFamily: 'font1' }} className='text-white text-5xl'>
              Sign In
            </p>
            <hr className='bg-[#ada8a8] w-5/6' />
            <div className='flex flex-col gap-3 w-4/6'>
              <p className='text-white'>Электронная почта пользователя</p>
              <input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='  Почта или имя пользователя'
                className='h-12 bg-[#292828] border border-[grey] hover:border-[white] text-white'
              />
              <p className='text-white'>Имя пользователя</p>
              <input
                type='text'
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder='  Почта или имя пользователя'
                className='h-12 bg-[#292828] border border-[grey] hover:border-[white] text-white'
              />
              <div className='flex flex-col gap-3 py-4'>
                <p className='text-white'>Пароль</p>
                <input
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder='  Пароль'
                  className='h-12 bg-[#292828] border border-[grey] hover:border-[white] text-white'
                />
              </div>
              <button
                className='w-full text-xl font-semibold rounded-full bg-[#e3eb75] h-12 hover:border border-[#fff9f9]'
                onClick={handleRegistration}
              >
                Зарегистрировать
              </button>
            </div>
            <hr className='bg-[#ada8a8] w-5/6' />
            <div className='flex gap-4'>
              <p className='text-[grey]'>Уже создали аккаунт?</p>
              <Link className='text-white hover:text-[#e7e2e2]' to='/login'>
                Войдите
              </Link>
            </div>
          </div>
        </div>
        {showModal && (
        <div style={{fontFamily: 'font2'}} className='modal'>
          <div className={`modal-content ${modalType}`}>
            <div className='modal-text'>
              <p>{modalMessage}</p>
              <button onClick={() => setShowModal(false)} 
              className='h-12 w-24 bg-[white] text-black
              rounded-xl hover:border border-[yellow]'>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </div>

    )
}

export default SignIn;