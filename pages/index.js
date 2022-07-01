import React from 'react';
import product from "../fox-shop/schemas/product";

const Index = () => {
    return (
        <>
            HeroBanner
            <div>

            </div>
            <div>
                {['Product 1', 'Product 2'].map(
                    (product) => product)}
            </div>

            Footer
        </>
    );
};

export default Index;