import React, { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css';
import '../styles/Mainimg.css';
import Cookies from 'js-cookie';
import '../styles/Modals.css';

const Login: FC = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('')
    const [password, setPassword] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const userString = Cookies.get('user');
    
        if (!userString) {
          setModalMessage('User does not exist');
          setModalType('error');
          setShowModal(true);
          return;
        }
    
        const user = JSON.parse(userString);
    
        if ((user.email === emailOrUsername || user.username === emailOrUsername) && user.password === password) {
          navigate('/dashboard');
        } else if (user.email === emailOrUsername || user.username === emailOrUsername) {
          setModalMessage('Incorrect password');
          setModalType('error');
          setShowModal(true);
        } else {
          setModalMessage('User does not exist');
          setModalType('error');
          setShowModal(true);
        }
      };
    

    return (
        <div className='loginbg flex items-center justify-center'>
            <div className='logincontainer'>
                <div className='flex justify-center gap-14 items-center flex-col'>
                    <p 
                        style={{ fontFamily: 'font1'}}
                        className='text-white text-5xl py-14'>Thainlao Store
                    </p>
                    <hr className='bg-[#ada8a8] w-5/6' />
                    <div className='flex flex-col gap-3 w-4/6'>
                        <p className='text-white'>
                            Электронная почта или имя пользователя
                        </p>
                        <input
                        type='text' value={emailOrUsername}
                        onChange={(e) => setEmailOrUsername(e.target.value)}
                        placeholder='  Почта или имя пользователя'
                        className='h-12 bg-[#292828] border border-[grey]
                        hover:border-[white] text-white'
                        />
                        <div className='flex flex-col gap-3 py-4'>
                        <p className='text-white'>
                            Пароль
                        </p>
                        <input
                        type='password' value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='  Пароль'
                        className='h-12 bg-[#292828] border border-[grey]
                        hover:border-[white] text-white'
                        />
                        </div>
                        <button 
                        onClick={handleLogin}
                        className='w-full text-xl font-semibold rounded-full bg-[#e3eb75] h-12
                        hover:border border-[#fff9f9]'>
                            Войти
                        </button>
                    </div>
                    <hr className='bg-[#ada8a8] w-5/6' />
                    <div className='flex gap-4'>
                        <p className='text-[grey]'>Нет аккаунта?</p>
                        <Link 
                        className='text-white hover:text-[#e7e2e2]'
                        to='/signin'>Создать аккаунт</Link>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className='modal'>
                    <div style={{ fontFamily: 'font2' }} className={`modal-content ${modalType}`}>
                        <div className='modal-text'>
                            <p>{modalMessage}</p>
                            <button
                            onClick={() => setShowModal(false)}
                            className='h-12 w-24 bg-[white] text-black rounded-xl hover:border border-[yellow]'
                            >
                            Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Login