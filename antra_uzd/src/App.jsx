import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (product) => {
        const index = cartItems.findIndex(item => item.name === product.name);
        if (index !== -1) {
            const newCartItems = [...cartItems];
            newCartItems.splice(index, 1);
            setCartItems(newCartItems);
        }
    };

    return (
        <div className="container">
            <h1>Shopping Cart System</h1>
            <ProductList addToCart={addToCart} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    );
};

export default App;