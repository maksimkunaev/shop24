import React from 'react';
import './Trash.css';

const renderAddToYourTrash = ({info}) => {



        return <div className='content__add-items'>
            <div className='content__add-items-text-field'>
                <div className='content__add-items-text'>Добавьте к Вашему заказу</div>
            </div>

            <div className='content__cards-add-items'>
                {info.map((item, i) => <div className='content__add-items-card'
                    key={i}>
                    <img
                        className='content__image'
                        src={`./image/${item.image}`}
                        height="360"
                        alt="lorem" />
                    <div className='content__image-title-price'>
                        <div className='content__image-title'>{item.title}</div>
                        <div className=''>{item.price}</div>
                    </div>
                </div>)}

            </div>
        </div>
    }

export default renderAddToYourTrash;
