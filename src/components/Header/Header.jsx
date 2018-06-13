import React, { Component } from 'react';
import './Header.css';
import bind from 'decko';
import cn from 'classnames';

const categories = [
    { id: `clothes`, name: `Одежда и аксессуары` },
    { id: `shoes`, name: `Обувь` },
    { id: `ornamentation`, name: `Украшения` },
    { id: `beauty`, name: `Красота и здоровье` },
    { id: `household`, name: `Товары для дома` },
    { id: `kitchen`, name: `Товары для кухни` },
];

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            items: [1,2,3,4],
            activeCategory: 'clothes',
        }
    }

    // @bind
    onChangeInput(event) {
        this.setState({
            searchInput: event.target.value
        })
    }

    goToTab(id){
        this.setState({
            activeCategory: id
        })
    }

    renderPagination() {

        return <div className='header__category_content'>
            { categories.map( (item, i) =>{

                return <div
                    className={cn(
                        `header__category_${item.id}`,
                        { choosen_header__category: this.state.activeCategory === item.id }
                    )}
                    onClick={this.goToTab.bind(this, item.id)}
                    key={i}>
                    {item.name}
                </div>
            })}
        </div>
    }

    render() {
        const { searchInput, items } = this.state;
        const tabs = this.renderPagination();

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
                { tabs }
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
