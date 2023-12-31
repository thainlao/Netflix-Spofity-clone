import React, { FC, useState} from 'react'
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css';
import '../styles/Mainimg.css';
import '../styles/Modals.css';

const SignIn: FC = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['user'])

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    let passwordStrengthMessage = 'Weak password';
    if (password.length >= 5 && password.length <= 7) {
      passwordStrengthMessage = 'Medium password';
    } else if (password.length > 7) {
      passwordStrengthMessage = 'Strong password';
    }

    const navigate = useNavigate();
    const handleRegistration = () => {

      if (!isValidEmail) {
        setShowModal(true);
        setModalType('error');
        setModalMessage('Please enter a valid email address');
        return;
      }

      if (password.length < 5) {
        setShowModal(true);
        setModalType('error');
        setModalMessage('Weak password. Password should be at least 5 characters long.')
      }
    
      // Проверка наличия пользователя с данным именем пользователя или адресом электронной почты
      const userExists = cookies.user && (cookies.user.email === email || cookies.user.username === username);
    
      if (userExists) {
        setShowModal(true);
        setModalType('error');
        setModalMessage('Current user is already exist :(');
      } else {
        const user = { email, username, password };
    
        // Сохранение данных пользователя в куки
        setCookie('user', user, { path: '/' });
        setShowModal(true);
        setModalType('success');
        setModalMessage('Success Registration!');
      }
    };
    

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
                className={`w-full text-xl font-semibold rounded-full ${
                  password.length < 5 ? 'bg-[#919191] cursor-not-allowed' : 'bg-[#e3eb75] hover:border border-[#fff9f9]'
                  } h-12`}
                onClick={handleRegistration}
                disabled={password.length < 5}
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