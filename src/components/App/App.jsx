import React, { Component } from 'react';
import './App.css'
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const itemsFromTrash = [
    {code: '82039-11', title: 'Платье-миди с расклешенной юбкой', size: 44, color: 'синий', price: 2450, image: 'jeans_blue.png'},
    {code: '13524-01', title: 'Туфли женские украшенные кружевными вставками', size: 38, color: 'черный', price: 2450, image: 'shoe.png'},
    {code: '75039', title: 'Платье-миди', size: 44, color: 'белый', price: 2450, image: 'blue_dress.png'},
    {code: '75039', title: 'Платье-миди', size: 44, color: 'белый', price: 2450, image: 'blue_dress.png'},
];

const addToYourTrash = [
    {title: 'Солнечные очки зеленого цвета в стиле ретро', price: 2450, image: 'bag.png'},
    {title: 'Шляпа', price: 800, image: 'hat.png'},
    {title: 'Платье-миди с расклешенной юбкой', price: 2450, image: 'socks.png'},
    {title: 'Платье-миди с расклешенной юбкой', price: 2450, image: 'jeans_blue.png'},
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
