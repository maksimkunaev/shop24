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

const tabs = [
    { id: `woman`, name: `Женская одежда` },
    { id: `man`, name: `Мужская одежда` },
    { id: `ornamentation`, name: `Аксессуары` },
];

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            items: props.itemsFromTrash,
            activeCategory: 'clothes',
            activeTab: ''
        }
    }

    // @bind
    onChangeInput(event) {
        this.setState({
            searchInput: event.target.value
        })
    }

    goToCategory(id){
        this.setState({
            activeCategory: id
        })
    }

    goToTab(id){
        this.setState({
            activeTab: id
        })
    }

    renderPagination() {

        return <div className='header__category_content'>
            { categories.map( (item, i) =>{

                return <div
                    className={cn(
                        `header__category_${item.id}`,
                        { choosen__tab: this.state.activeCategory === item.id }
                    )}
                    onClick={this.goToCategory.bind(this, item.id)}
                    key={i}>
                    {item.name}
                </div>
            })}
        </div>
    }

    renderTabs() {

        return <div className='header__tabs_content'>
            { tabs.map( item => <div
                className={cn(
                    `header__tabs_${item.id}`,
                    { choosen__tab: this.state.activeTab === item.id }
                )}
                onClick={this.goToTab.bind(this, item.id)}
                key={item.id}>
                    {item.name}</div>)}
        </div>
    }

    render() {
        const { searchInput, items } = this.state;
        const categories = this.renderPagination();
        const tabs = this.renderTabs();

        return (
            <div className='header'>
               <div className='header__links'>
                    <div className='header__links_content'>
                     <div className='header__links_phone'>
                        8 (800) 500-75-55 Бесплатный звонок по России
                     </div>
                    <div className='header__links_stars'>
                        <img
                            className=''
                            src={`./image/star.png`}
                            alt="star" />Звездный блог</div>
                    <div className='header__links_youtube'>
                        <img
                            className=''
                            src={`./image/youtube_link.png`}
                            alt="youtube" />Смотрите нас на Youtube</div>
                    <div className='header__links_live'>
                        <img
                            className=''
                            src={`./image/live_stream.png`}
                            alt="stream" />Смотрите наш прямой эфир</div>
                    </div>
               </div>

               <div className='header__main'>
                    <div className='header__main_content'>
                        <div className='header__main_left'>
                            <div className='header__main_shop24'>
                                <img
                                    className='content__image'
                                    src={`./image/shop24.png`}
                                    alt="shop24" />
                            </div>
                            <div className='header__main_searching_cover'>
                                <input
                                    className='header__main_searching'
                                    value={searchInput}
                                    placeholder='Поиск по сайту'
                                    onChange={this.onChangeInput.bind(this)} />
                                <img
                                    className=''
                                    src={`./image/search.png`}
                                    alt="search" />
                            </div>
                        </div>
                        <div className='header__main_right'>
                            <div className='header__main_account'>
                                <img
                                    className=''
                                    src={`./image/account.png`}
                                    alt="account" />
                                Анастасия
                            </div>
                            <div className='header__main_trash'>
                            <img
                                className=''
                                src={`./image/trash.png`}
                                alt="trash" />
                            В корзине:<br/>
                                {items.length}  товара</div>
                        </div>
                    </div>
               </div>

               <div className='header__category'>
                { categories }
               </div>

               <div className='header__tabs'>
                { tabs }
               </div>

            </div>
        )
    }
}

export default Header;
