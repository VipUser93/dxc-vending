import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllProducts } from "../../app/productSlice";

import Product from "./components/Product";

const apiUrl = 'https://651d785d44e393af2d59dd05.mockapi.io/api/v1/products';

const Products = () => {
    const products = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts(apiUrl))
    }, [dispatch])


    return (
        <div className="products">
            <div className="products-holder">
                {products?.data?.length > 0 && products?.data?.map((product, key) => 
                    <Product product={product} key={key} />
                )}
            </div>
            <div className="products-drop">
                
            </div>
        </div>
    )
} 

export default Products;