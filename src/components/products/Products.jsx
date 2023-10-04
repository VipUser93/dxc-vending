import React from "react";

const Products = (props) => {
    const products = [
        {
            id: "1",
            type: "water",
            price: 1
        },
        {
            id: "2",
            type: "orange juice",
            price: 2
        },
        {
            id: "3",
            type: "waffles",
            price: 1.50
        },
        {
            id: "4",
            type: "coca cola",
            price: 1.60
        }
    ];
    
    return (
        <div>
            {products.map(product => {
                return (
                    <div>
                        <div>{product.type}</div>
                        <div>{product.price}</div>
                    </div>
                )
            })}
        </div>
    )
} 

export default Products;