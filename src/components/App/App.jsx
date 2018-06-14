import React, { Component } from 'react';
import './App.css'
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const itemsFromTrash = [
    {code: '82039-11', title: 'Платье-миди с расклешенной юбкой', size: 44, color: 'синий', price: 2450, image: 'dress1.jpg'},
    {code: '13524-01', title: 'Туфли женские украшенные кружевными вставками', size: 38, color: 'черный', price: 2450, image: 'dress2.jpg'},
    {code: '75039', title: 'Платье-миди', size: 44, color: 'белый', price: 2450, image: 'dress3.jpg'},
    {code: '75039', title: 'Платье-миди', size: 44, color: 'белый', price: 2450, image: 'dress4.jpg'},
];

const addToYourTrash = [
    {title: 'Платье-миди с расклешенной юбкой', price: 2450, image: 'dress1.jpg'},
    {title: 'Платье-миди с расклешенной юбкой', price: 2450, image: 'dress1.jpg'},
    {title: 'Солнечные очки зеленого цвета в стиле ретро', price: 2450, image: 'dress3.jpg'},
    {title: 'Шляпа', price: 800, image: 'dress4.jpg'},
];



class App extends Component {

    render() {
        return (
            <div className='App'>
                <Header itemsFromTrash={itemsFromTrash} />
                <Content itemsFromTrash={itemsFromTrash} addToYourTrash={addToYourTrash} />
                <Footer />
            </div>
        )
    }
}

export default App;
