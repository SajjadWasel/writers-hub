import React from 'react';
// import { useEffect, useState } from 'react/cjs/react.development';
import './Shop.css'
import Cart from '../Cart/Cart';
import Writers from '../Writter/Writer';
import { useState, useEffect } from 'react';


const Shop = () => {

    // --------Writter State----------
    const [writers, setWriters] = useState([]);
    //--------Cart State--------------
    const [cart, setCart] = useState([]);

    //---Loading JSON data and setting writer--------
    useEffect(()=> {
        fetch('./authors.json')
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])

    //Writer Button Handler
    const handleAddToCart = (writersName) => {
        const newCart = [...cart, writersName]
        setCart(newCart);
    }


    return (
        <div>
            {/* ------Cart----- */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            {/* ------Writter Loop----- */}
            <div className="writers-container">
                {
                    writers.map(writer => <Writers key={writer.cost} writers={writer} handleAddToCart = {handleAddToCart}></Writers>)
                }
            </div>   
             {/* -----Footer---- */}
            <div className="footer">
                <h3>©WrittersHub@2021</h3>
            </div>           
        </div>
    );
};

export default Shop;