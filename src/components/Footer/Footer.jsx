import React, { Component } from 'react';
import './Footer.css'

const links = [
    {title: 'vk', image: 'vk.png'},
    {title: 'fb', image: 'fb.png'},
    {title: 'ok', image: 'ok.png'},
    {title: 'r', image: 'r.png'},
    {title: 'heart', image: 'heart.png'},
    {title: 'instagram', image: 'instagram.png'},
    {title: 'youtube', image: 'youtube.png'},
]

const info = [
    {title: 'Каталог товаров', list: ['Одежда и аксессуары', 'Обувь', 'Украшения', 'Красота и здоровье', 'Товары для дома, дачи и отдыха', 'Товары для кухни']},
    {title: 'Заказ', list: ['Оплата и доставка', 'Возврат', 'Помощь', 'Благотворительный Фонд Константина Хабенского', 'Гарантия на дополнительное обсуживание товара','Пользовательское соглашение']},
    {title: 'Shop24', list: ['Смотреть прямой эфир', 'Расписание передач', 'Акции', 'Личный кабинет', 'Поиск и карта сайта', ' Карта брендов', 'Обратная связь']},
    {title: 'Информация', list: ['О канале', 'Сотрудничество', 'Покупайте с нами!', 'Контакты']}
]

class Footer extends Component {

    renderSocialLinks() {
        return <div className='footer__social'>
            <p>SHOP24 в социальных сетях:</p>
            {links.map((item, i) => <a className='footer__social-links' href="#" key={i}>
                <img src={`./image/${item.image}`} alt={item.title} /></a>)}
       </div>
    }

    renderInfolinks() {
         return <div className='footer_info-links'>
            {info.map((item,i) => <div className='footer_info-block' key={i}>
                <div className='footer_info-block-title'>
                    <a href='#' className='footer__links'>
                        {item.title}</a>
                    </div>
                        {item.list.map((item, i) => <div className='footer_info-list'>
                            <a href='#' key={i} className='footer__links'>{item}</a>
                    </div>)}
                </div>)}
         </div>
    }


    render() {
        const links = this.renderSocialLinks();
        const info = this.renderInfolinks();

        return (
            <div className='footer'>
                {links}

               <div className='footer__about_cover'>
                   <div className='footer__about'>
                        <img className='footer__logo' width='100' height='100' src={`./image/logo.png`} alt='logo.png' />
                        <div className='footer__about-phones'>
                            <div className='footer__about-phone'>
                                8 (800) 500-75-55<span>*</span></div>
                            <div className='footer__about-phone-rf'>
                                <span>*</span>Бесплатный  звонок по всей России</div>
                            <div className='footer__about-phone'>8 (495) 733-96-03</div>
                        </div>

                        {info}
                    </div>
               </div>


               <div className='footer__copyright'>
                    <div className='footer__copyright-text'>
                        Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены.<br/>
                        При использовании материалов сайта ссылка нa www.shop24.com обязательна.<br/>
                        115193, Москва, ул Кожуховская 5-ая, д.9, помещение VII<br/>
                        Телефон 8 800 500-75-55
                    </div>
               </div>
            </div>
        )
    }
}

export default Footer;
