import type { NextPage } from 'next'
import { useState } from 'react';
import tanks from '../img/tanks2.png';
import car from '../img/car.png';
import logo from "../img/logo.svg";
import Image from 'next/image'


const Second: NextPage = () => {
  const [transportStatus, setTransportStatus] = useState(1);
  const [menuStatus, setMenuStatus] = useState('closed');
  const handleMenuClick = (evt: React.MouseEvent<HTMLElement>) => {
    if (menuStatus == 'closed') {
      setMenuStatus('open');
    }
    else {
      setMenuStatus('closed');
    }
  }

  const handleTransportHover = (evt: React.MouseEvent<HTMLElement>) => {
    setTransportStatus(1);
  }

  const handleCartHover = (evt: React.MouseEvent<HTMLElement>) => {
    setTransportStatus(2);
  }

  return (
    <div>
      <header>
        <div className="side__menu">
          <div>
            <a aria-label="mobile menu" className={menuStatus==='open'?"nav-toggle open":"nav-toggle"} onClick={handleMenuClick}>
              <span></span>
              <span></span>
            </a>
            <p className="menu__text">Меню</p>
          </div>
        </div>
          <div className="container navigation">
            <nav id="navigation">

              <a href="#" className="logo d-flex">
                <Image src={logo} height={30} width={30} />
                <span className='logo__text'>ПЕНЗГИДРОМАШ</span>
              </a>

                <ul className={menuStatus==='open'?"menu-left collapse":"menu-left"}>
                  <li><a href="#about">Компания</a></li>
                  <li><a href="#exp">Продукты и услуги</a></li>
                  <li><a href="#skills">Проекты</a></li>
                  <li><a href="#projects">Новости</a></li>
                  <li><a href="#contact">Контакты</a></li>
                  <li><a href="#contact">Контакты</a></li>
                  <li><a href="#contact">Контакты</a></li>
                </ul>
            </nav>
          </div>
        </header>
        <section className="container d-flex margin-bot-50">
          <div className="company-info__block">
            <div className="breadcrumbs"><a>Главная</a>  <a>Контакты</a></div>
            <h1>Компания</h1>
            <div className="company-info__line"></div>
            <h2>Основная сфера деятельности «ПензГидромаш» — создание систем для нефтяной, газовой, химической и нефтехимической сфер промышленности.</h2>
          </div>
          <div className="company-img__block"></div>
        </section>
        <section className="container">
          <div className="about-us__block">
            <h2>О нас</h2>
            <h3 className="about-us__text">Наша цель — взаимовыгодное сотрудничество на основе долгосрочных контрактов.<br />
                Мы представлены на рынке с 2006 года и не перестаем развиваться, совершенствовать качество своих услуг,
                оптимизировать затраты для снижения стоимости продукции.</h3>
          </div>
        </section>
        <section className="container d-flex">
          <div className="tanks__img">
            <Image src={tanks} alt="tanks2" layout="fill"/>
          </div>
          <div className='bold text__container'>
            <p>Выполняем все работы по проектированию систем, закупке необходимых материалов, производству, установке, наладке, гарантийному и внегарантийному обслуживанию. Уникальный парк оборудования позволяет находить решения для любых производственных задач клиентов.</p>
            <p>Также мы берем на себя все сложности, связанные с сертификацией нестандартного оборудования. В этом процессе принимают участие инженеры и юристы с многолетним опытом работы. Клиенты получают все нужные документы для того, чтобы использование оборудования было полностью законным. Выпускаемая нашей компанией продукция разрешена к применению Ростехнадзором. На производстве внедрен жесткий менеджмент качества — по международному стандарту ГОСТ Р ИСО 9001.</p>
          </div>
        </section>


        <section className="container">
          <h2 className='section__title'>Транспорт</h2>
          <div className="d-flex slider">
            <div className="slider__images">
              <div className="slider-img__number">
                <p className="img-number">{transportStatus==1?"01/02":"02/02"}</p>
              </div>
              <div className={transportStatus==2?"slider-img__inactive":"slider-img__car"}>
                <Image src={car} alt="car" layout="fill" />
              </div>
              <div className={transportStatus==1?"slider-img__inactive":"slider-img__tank"}>
                <Image src={tanks} alt="car" layout="fill" />
              </div>
            </div>
              <div className='bold'>
                <div className='text__container auto__block' onMouseEnter={handleTransportHover} style={transportStatus==1?{background:"#F6F6F6"}:{}}>
                  <div className="auto__text">
                    <h3>Автотранспорт</h3>
                    <ul className='list'>
                      <li>Собственная автотранспортная компания</li>
                      <li>Перевозка негабаритных и тяжеловесных грузов</li>
                      <li>Доставка в любую точку России</li>
                    </ul>
                  </div>
                </div>
                <div className='text__container railway__block' onMouseEnter={handleCartHover} style={transportStatus==2?{background:"#F6F6F6"}:{}}>
                  <div className="railway__text">
                    <h3>Железнодорожный транспорт</h3>
                    <p>На заводе имеется ж/д ветка, заходящая в производственное здание</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Second
