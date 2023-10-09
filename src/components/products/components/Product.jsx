import React from "react";
import { useDispatch, useSelector } from "react-redux";

import productSlice from "../../../app/productSlice";
import vendingSlice from "../../../app/vendingSlice";

const Product = ({product}) => {
    const dispatch = useDispatch();
    const { buyProduct } = productSlice.actions;
    const { removeMoney, setError } = vendingSlice.actions;
    const { money } = useSelector((state) => state.vending);

    const imageClass = `product-image pi-${product.name.split(" ").join("-").toLowerCase()}`;

    const getItem = () => {
        if (Number(product.price) < money && product.quantity > 0) {
            dispatch(buyProduct(product.id));
            handleMoney();
        } else {
            dispatch(product.quantity === 0
                ? setError("Product is out of stock.")
                : setError("Not enough money..."));
        }
    }

    const handleMoney = () => {
        dispatch(removeMoney(Number(product.price)));
    }

    return (
        <div className="item" onClick={getItem}>
            <div className="item-image">
                <div className={imageClass}></div>
                {product.quantity === 0 && (
                    <div className="out-of-stock"></div>
                )}
            </div>
            <div className="item-info">
                <div className="item-cp">
                    <span className="item-text">Price:</span>
                    <span className="item-value">{product.price.toFixed(2)}</span>
                </div>
                <div className="item-cp">
                    <span className="item-text">QTY:</span>
                    <span className="item-value">{product.quantity}</span>
                </div>
            </div>
        </div>
    )
} 

export default Product;