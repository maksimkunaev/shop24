import React, { Component } from 'react';
import './Header.css';
import bind from 'decko';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            items: [1,2,3,4],
            category: 'clothes',
        }
    }

    // @bind
    onChangeInput(event) {
        this.setState({
            searchInput: event.target.value
        })
    }


    render() {
        const { searchInput, items } = this.state;

        return (
            <div className='header'>
               <div className='header__links'>
                    <div className='header__links_content'>
                     <div className='header__links_phone'>
                        8 (800) 500-75-55 Бесплатный звонок по России
                     </div>
                    <div className='header__links_stars'>Звездный блог</div>
                    <div className='header__links_youtube'>Смотрите нас на Youtube</div>
                    <div className='header__links_live'>Смотрите наш прямой эфир</div>
                    </div>
               </div>

               <div className='header__main'>
                    <div className='header__main_content'>
                        <div className='header__main_left'>
                            <div className='header__main_shop24'>shop24</div>
                            <input
                                className='header__main_searching'
                                value={searchInput}
                                placeholder='Поиск по сайту'
                                onChange={this.onChangeInput.bind(this)} />
                        </div>
                        <div className='header__main_right'>
                            <div className='header__main_account'>Анастасия</div>
                            <div className='header__main_trash'>В корзине:<br/>
                                {items.length}  товара</div>
                        </div>
                    </div>
               </div>

               <div className='header__category'>
                    <div className='header__category_content'>
                        <div className='header__category_clothes'>
                            Одежда и аксессуары
                        </div>
                        <div className='header__category_shoes'>
                            Обувь
                        </div>
                        <div className='header__category_ornamentation'>
                            Украшения
                        </div>
                        <div className='header__category_beauty'>
                            Красота и здоровье
                        </div>
                        <div className='header__category_household'>
                            Товары для дома
                        </div>
                        <div className='header__category_kitchen'>
                            Товары для кухни
                        </div>
                    </div>
               </div>


               <div className='header__tabs'>
                    <div className='header__tabs_content'>
                    header__tabs_content
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
