import React, {FC} from 'react'
import '../styles/subscribe.css';
import img from '../assets/ph3.jpg';
import img1 from '../assets/filmimg8.jpeg';
import img2 from '../assets/filmimg3.jpeg';
import img3 from '../assets/iphone.png';
import { useNavigate } from 'react-router-dom';

const Subscribe: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='subscribe-bg'>
      <div className='subscribe-container'>
        {/* 1ST CONTAINER */}
        <div className='container-1st'>
          <h1 className='maintext'>Фильмы, Сериалы, Музыка, Опции и кешбек баллами в сервиса</h1>
          <h2 className='sub-text'>Смотрите фильмы и сериалы, слушайте любимые треки и аудиокниги, читайте книги и комиксы. Всё это — в Thainlao Плюсе</h2>
          <button onClick={() => navigate('/login')} className='sub-button'>Подписаться</button>
          <h3 className='subb-text'>Thainlao Plus - до конца лета бесплатно, далее 299 ₽ в месяц</h3>
          <h4 style={{ marginTop: '-10px'}} className='subb-text'>До конца лета бесплатно, далее 100 ₽ в месяц</h4>
          <img src={img} className='sub-img'/>
        </div>
        {/* 2ST CONTAINER */}
        <div className='spacer'></div>
        <div className="container-2st">
        <h1 className='maintext'>Новинки и эксклюзивы каждую неделю</h1>
          <h2 className='sub-text'>Выбирайте в каталоге фильмы и сериалы по настроению, включайте спортивную трансляцию или один из десятков телеканалов</h2>
          <button onClick={() => navigate('/login')} className='sub-button'>Подписаться</button>
          <h3 className='subb-text'>Thainlao Plus - до конца лета бесплатно, далее 299 ₽ в месяц</h3>
          <h4 style={{ marginTop: '-10px'}} className='subb-text'>До конца лета бесплатно, далее 100 ₽ в месяц</h4>
          <div className='pic-container'>
            <img src={img1} className='sub-images'/>
            <img src={img2} className='sub-images'/>
          </div>
        </div>
        <div className='spacer'></div>
        {/* 3RD CONTAINER */}
      </div>
      <div className="container-3st">
        <h1 className='maintext-img text-white'>Присоединяйся в нашу огромную команду! Нас уже более 10 миллионов человек</h1>
          <img src={img3} className='w-64 h-64'/>
          <h3 className='text-white text-sm'>Thainlao Plus - до конца лета бесплатно, далее 299 ₽ в месяц</h3>
          <h4 style={{ marginTop: '-10px'}} className='text-white text-sm'>До конца лета бесплатно, далее 100 ₽ в месяц</h4>
        </div>
    </div>
  )
}

export default Subscribe;