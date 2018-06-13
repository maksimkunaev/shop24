import React, { Component } from 'react';
import './Content.css'

const items = [
    {code: '82039-11', title: 'Платье-миди с расклешенной юбкой', size: 44, color: 'синий', price: 2450, image: './image/dress1.jpg'},
    {code: '13524-01', title: 'Туфли женские украшенные кружевными вставками', size: 38, color: 'черный', price: 2450, image: './image/dress2.jpg'},
    {code: '75039', title: 'Платье-миди', size: 44, color: 'белый', price: 2450, image: './image/dress3.jpg'},
    {code: '75039', title: 'Платье-миди', size: 46, color: 'белый', price: 2450, image: './image/dress4.jpg'},
];

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    renderCards() {

    }

    render() {
        return (
            <div className='content'>
                <div className='content__header'>
                    <span className='content__header-title'>
                       Ваша корзина
                   </span>
                </div>
                <div className='content__items'>
                    {items.map((item, i) => <div className='content__items_card'>

                    </div>)}
                </div>
                <div className='content__promocode'>
                    Промокод
                </div>
                <div className='content__add-items'>
                    Добавьте
                </div>
            </div>
        )
    }
}

export default Content;
