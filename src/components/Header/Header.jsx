import React, { Component } from 'react';
import './Header.css'
import bind from 'bind-decorator';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
    }

    // @bind
    onChangeInput(event) {
        // this.setState({
        //     searchInput: event.target.value
        // })
    }


    render() {
        const { searchInput } = this.state;
        console.log(searchInput)
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
                                // value={searchInput}
                                // ref={input => this.input = input}
                                onChange={this.onChangeInput} />
                        </div>
                        <div className='header__main_right'>
                            <div className='header__main_account'>account</div>
                            <div className='header__main_trash'>trash</div>
                        </div>
                    </div>
               </div>

               <div className='header__category'>
                    <div className='header__category_content'>
                    header__category_content
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
