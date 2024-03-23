import { useEffect, useState } from 'react';
import ProductsList from '../productsList/productsList';
import './home.css'
import Loader from '../loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../store/slices/productsSlice';

function Home(){
    const dispatch = useDispatch()
    const { products, isLoading } = useSelector((state) => state.products);
    
    useEffect(() => {
        let mounted = true;
        if (mounted) {
          dispatch(getProductsThunk());
        }
    
        return () => {
          mounted = false;
        };
    }, []);
    
    if (isLoading) {
        return(
            <div>
                <Loader></Loader>
            </div>);
    }

    if (products) {
        return(
            <div>
                <ProductsList products={products}></ProductsList>
            </div>
        )
    }
    
}

export default Home;