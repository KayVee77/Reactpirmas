import React from 'react';
import ProductItem from './ProductItem';

const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
];

const ProductList = ({ addToCart }) => {
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product, index) => (
                    <ProductItem key={index} product={product} addToCart={addToCart} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;