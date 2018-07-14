import React, { Component } from 'react';
import './Content.css'
import cn from 'classnames';
import Trash from './components/Trash';

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            promocode: '123456',
            visible: 'hidden',
            valueInputPromoCode: '',
            discount: 0
        }
    }

    componentWillMount() {
        let { itemsFromTrash } = this.props;
        let items = [];

        items = itemsFromTrash.map((item,i) => {
            item.id = i;
            item.quantity = 1;
            item.total = item.quantity * item.price;

            return item;
        });

        this.setState({
            items
        });

        this.calculateAmount(items);
    }

    onChahgePromoCode(e) {
        e.preventDefault();
        this.setState({
            valueInputPromoCode: e.target.value
        })
    }

    inputPromoCode() {
        const { promocode, valueInputPromoCode } = this.state;
        if (promocode === valueInputPromoCode) {
            this.setState({
                visible: 'visible',
                discount: 1800
            })
        } else {
            this.setState({
                visible: 'visible',
                discount: 0
            })
        }
    }

    reduceQuantity(id){
        const { items } = this.state;
        let newItems = [];

        newItems = items.map( item => {
            if (item.id === id) {
                --item.quantity;
                if (item.quantity < 0) item.quantity = 0;

                return item;
            } else {
                return item;
            }
        });

        this.calculateAmount(newItems);
    }

    enlargeQuantity(id) {
        const { items } = this.state;
        let newItems = [];

        newItems = items.map( item => {
            if (item.id === id) {
                ++item.quantity;
                return item;
            } else {
                return item;
            }
        });

        this.calculateAmount(newItems);
    }

    calculateAmount(newItems) {
        let newPrice = [];
        let totalPrice = 0;

        newPrice = newItems.map( item => {
            item.total = item.price * item.quantity;
            totalPrice += item.total;
            return item;
        });

        this.setState({
            items: newPrice,
            totalPrice
        })
    }

    deleteItem(i) {
        const { items } = this.state;
        let newItems = [...items];

        newItems.splice(i, 1);
        this.calculateAmount(newItems);
    }

    renderCards() {
        const { items } = this.state;

        return <div className='content__items'>
            <div className='content__items_titles'>
                <div className='content__items_title'>Товар</div>
                <div className='content__items_title-description'>Описание</div>
                <div className='content__items_title-quantity'>Количество</div>
                <div className='content__items_title-price'>Цена</div>
                <div className='content__items_title-delete'>Удалить</div>
            </div>
            {items.map((item, i) => <div className='content__items_card'
                key={item.id}>
                    <div
                    className='content__items_card-image'
                        >
                        <img
                            className='content__image'
                            src={`./image/${item.image}`}
                            alt="lorem" />
                    </div>
                    <div className='content__items_card-description'>
                        <div className='content_card-title'>{item.title}</div>
                        <div className='content_card-code'>Код: {item.code}</div>
                        <div className='content_card-size'>Размер: {item.size}</div>
                        <div className='content_card-color'>Цвет: {item.color}</div>
                    </div>
                    <div className='content__items_card-quantity'>
                        <div className='content__card-change-quantity'>
                            <div className='content__card-quantity-minus'
                                onClick={this.reduceQuantity.bind(this, item.id)}>̶</div>
                            <div>{item.quantity}</div>
                            <div className='content__card-quantity-plus'
                                onClick={this.enlargeQuantity.bind(this, item.id)}>+</div>
                        </div>
                    </div>
                    <div className='content__items_card-price'>{item.total} руб</div>
                    <div className='content__items_card-delete'
                        onClick={this.deleteItem.bind(this, i)}>
                            <img
                                className=''
                                src={`./image/delete.png`}
                                alt="lorem" /></div>
            </div>)}
        </div>
    }

    renderPromoCode() {
        const { visible, valueInputPromoCode, totalPrice, discount } = this.state;
        let classes;
        let totalPriceWhitPromo = totalPrice;

        if (visible === 'visible') {
            classes = cn('content__visible-promocode');
            totalPriceWhitPromo = totalPrice - discount;
        }   else {
            classes = cn('content__invisible-promocode')
        }

        if (totalPriceWhitPromo < 0) totalPriceWhitPromo = 0;

        return <div className='content__promocode'>
            <div className='content__input-promocode'>
                <div className='content__have-promocode'>Есть промокод?</div>
                <input className='content__input'
                    value={valueInputPromoCode}
                    placeholder='Введите промокод'
                    onChange={this.onChahgePromoCode.bind(this)}/>
            </div>

            <div className='content__apply-promocode'>
                <button className='content__button_apply-promocode'
                    onClick={this.inputPromoCode.bind(this)}>Применить</button>
            </div>

            <div className='content__titles-promocode'>
                <div className='content__amount'>Сумма заказа:</div>
                <div className={classes}>Промокод:</div>

                <div className='content__amount-total'>Всего:</div>
            </div>

            <div className='content__total-amount'>
                <div>{totalPrice}</div>
                <div className={classes}>{discount}</div>
                <div className='content__total-amount-discount'>{totalPriceWhitPromo}</div>
                <button className='content__button_make-order'>Оформить заказ</button>
            </div>
        </div>
    }

    render() {
        const { addToYourTrash } = this.props;
        const items = this.renderCards();
        const promocode = this.renderPromoCode();

        return (
            <div className='content'>
                <div className='content__header'>
                    <span className='content__header-title'>
                       Ваша корзина
                   </span>
                </div>
                { items }
                { promocode }
                <Trash info={addToYourTrash} />
            </div>
        )
    }
}

export default Content;
