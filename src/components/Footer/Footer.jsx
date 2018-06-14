import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {

    render() {
        return (
            <div className='footer'>
               <div className='footer__social'>Social</div>
               <div className='footer__links'>Links</div>
               <div className='footer__copyright'>Copyright</div>
            </div>
        )
    }
}

export default Footer;
