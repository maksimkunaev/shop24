import React, { Component } from 'react';
import './Content.css'

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: props.itemsFromTrash
        }
    }

    renderCards() {
        const { items } = this.state;

        return <div className='content__items'>
            {items.map((item, i) => <div
                key={item.id}
                className='content__items_card'
                >
                {item.title}
            </div>)}
        </div>
    }

    render() {
        const items = this.renderCards();

        return (
            <div className='content'>
                <div className='content__header'>
                    <span className='content__header-title'>
                       Ваша корзина
                   </span>
                </div>
                { items }
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
