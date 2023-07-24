import React, {FC, useState} from "react";
import { Link } from "react-router-dom";
import '../styles/support.css';

    const Support: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);
    const [isExpanded4, setIsExpanded4] = useState(false);
    const [isExpanded5, setIsExpanded5] = useState(false);
    const [isExpanded6, setIsExpanded6] = useState(false);

    const toggleExtenstion = () => {
        setIsExpanded((a) => !a);
    };

    const toggleExpansion2 = () => {
        setIsExpanded2((prevIsExpanded) => !prevIsExpanded);
      };
    
      const toggleExpansion3 = () => {
        setIsExpanded3((prevIsExpanded) => !prevIsExpanded);
      };

      const toggleExpansion4 = () => {
        setIsExpanded4((prevIsExpanded) => !prevIsExpanded);
      };

      const toggleExpansion5 = () => {
        setIsExpanded5((prevIsExpanded) => !prevIsExpanded);
      };

      const toggleExpansion6 = () => {
        setIsExpanded6((prevIsExpanded) => !prevIsExpanded);
      };

    return (
        <div className="support-bg">
        <div className="support-container">
            <p className="maintext py-4">Остались вопросы?</p>
          <div className="question-container">
            <button className={`arrow-btn ${isExpanded ? "rotate" : ""}`} onClick={toggleExtenstion}>
              {isExpanded ? "▼" : "▼"}
            </button>
            <p
            onClick={toggleExtenstion}
            className={`question ${isExpanded ? "expanded" : ""}`}
          >
            Что дает Thainlao Plus?
          </p>
          </div>
          <div style={{background: 'grey', width: '100%', height: '2px', opacity: '0.4', marginTop: '15px'}}></div>
          <div className={`expand-content ${isExpanded ? "expanded" : ""}`}>
            <p>
                Яндекс Плюс — это доступ к миллионам треков и подкастов на Яндекс Музыке, фильмам и сериалам на Кинопоиске, а ещё кешбэк баллами, который копится при заказах в сервисах Яндекса.
            </p>
          </div>
                  {/* 2 question*/}
        <div className="question-container">
            <button className={`arrow-btn ${isExpanded2 ? "rotate" : ""}`} onClick={toggleExpansion2}>
              {isExpanded ? "▼" : "▼"}
            </button>
            <p
            onClick={toggleExpansion2}
            className={`question ${isExpanded2 ? "expanded" : ""}`}
          >
            Как потратить баллы?
          </p>
          </div>
          <div style={{background: 'grey', width: '100%', height: '2px', opacity: '0.4', marginTop: '15px'}}></div>
          <div className={`expand-content ${isExpanded2 ? "expanded" : ""}`}>
            <p>
                Потратить баллы можно на поездки, заказы и развлечения в сервисах Яндекса, которые входят в Плюс. Вы можете оплатить баллами как часть, так и полную стоимость заказа.
                Подробный список сервисов, где можно тратить баллы.
            </p>
          </div>
                            {/* 3 question*/}
        <div className="question-container">
            <button className={`arrow-btn ${isExpanded3 ? "rotate" : ""}`} onClick={toggleExpansion3}>
              {isExpanded ? "▼" : "▼"}
            </button>
            <p
            onClick={toggleExpansion3}
            className={`question ${isExpanded3 ? "expanded" : ""}`}
          >
            Как отменить подписку?
          </p>
          </div>
          <div style={{background: 'grey', width: '100%', height: '2px', opacity: '0.4', marginTop: '15px'}}></div>
          <div className={`expand-content ${isExpanded3 ? "expanded" : ""}`}>
            <p>
            Подписку не обязательно отменять, её можно приостановить. Все непотраченные дни сохранятся и вы сможете её возобновить в любой удобный момент. Чтобы приостановить подписку, зайдите в личный кабинет, выберите активный тариф → «Приостановить подписку». Приостанавливать подписку можно не чаще 1 раза за полгода. Приостановить можно максимум на 56 дней. Подробнее в п.2.7 Условий подписки. А чтобы полностью остановить Плюс, выберите опцию «Отменить подписку». Подписка отключится, но вы сможете пользоваться Плюсом до конца оплаченного периода. Если вы отмените подписку во время пробного периода, Плюс может отключиться раньше срока. Например, если у вас был пробный период на 3 месяца, то при отключении он может сократиться до конца текущего месяца. Если вы подключали Плюс через своего мобильного оператора, а потом решили отключить его, то Плюс остановится в тот же день.
            </p>
          </div>
                            {/* 4 question*/}
        <div className="question-container">
            <button className={`arrow-btn ${isExpanded4 ? "rotate" : ""}`} onClick={toggleExpansion4}>
              {isExpanded ? "▼" : "▼"}
            </button>
            <p
            onClick={toggleExpansion4}
            className={`question ${isExpanded4 ? "expanded" : ""}`}
          >
            Можно ли попробовать подписку, не привязывая банковскую карту?
          </p>
          </div>
          <div style={{background: 'grey', width: '100%', height: '2px', opacity: '0.4', marginTop: '15px'}}></div>
          <div className={`expand-content ${isExpanded4 ? "expanded" : ""}`}>
            <p>
            К аккаунту должна быть привязана карта. Не беспокойтесь — пока не закончится пробный период, никаких списаний не будет. Если вы привязываете новую карту, с неё списывается и тут же возвращается небольшая сумма денег — это чтобы убедиться, что с картой всё в порядке.
            </p>
          </div>
                            {/* 5 question*/}
        <div className="question-container">
            <button className={`arrow-btn ${isExpanded5 ? "rotate" : ""}`} onClick={toggleExpansion5}>
              {isExpanded ? "▼" : "▼"}
            </button>
            <p
            onClick={toggleExpansion5}
            className={`question ${isExpanded5 ? "expanded" : ""}`}
          >
            Как узнать, когда закончится бесплатный пробный период?
          </p>
          </div>
          <div style={{background: 'grey', width: '100%', height: '2px', opacity: '0.4', marginTop: '15px'}}></div>
          <div className={`expand-content ${isExpanded5 ? "expanded" : ""}`}>
            <p>
                В личном кабинете подписчика Плюса. За 3 дня до окончания пробного периода и первого списания с карты мы пришлём письмо с напоминанием на почту.
            </p>
          </div>
                            {/* 6 question*/}
        <div className="question-container">
            <button className={`arrow-btn ${isExpanded6 ? "rotate" : ""}`} onClick={toggleExpansion6}>
              {isExpanded ? "▼" : "▼"}
            </button>
            <p
            onClick={toggleExpansion6}
            className={`question ${isExpanded6 ? "expanded" : ""}`}
          >
            Сколько стоит подписка?
          </p>
          </div>
          <div style={{background: 'grey', width: '100%', height: '2px', opacity: '0.4', marginTop: '15px'}}></div>
          <div className={`expand-content ${isExpanded6 ? "expanded" : ""}`}>
            <p>
            Теперь копить и тратить баллы можно только с активным Плюсом. Если вы не оплатили подписку или отменили её, баллы будут сгорать через 30 дней после отмены подписки. Мы заранее предупредим о сгорании в личном кабинете Плюса и по почте. Если вы хотите сохранить баллы и начать их тратить, оформите Яндекс Плюс до даты сгорания.
            </p>
          </div>
        </div>
        <div className="end-support py-2">
            <p>2023 Thainlao</p>
            <p>Проект разработан <Link to='https://github.com/thainlao'><u className="link">'Thainlao'</u></Link></p>
            <p>18+</p>
        </div>
      </div>
    )
}

export default Support;