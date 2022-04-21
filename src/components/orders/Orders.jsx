import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../Loaders/Loader/Loader';
import Error from '../Loaders/Error';
import { deleteProduct, listProducts } from '../../redux/actions/productActions';
import OrderList from './OrderList';


const Orders = () => {

  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orderList);
  const { loading, orders, error } = orderList;
  // console.log('orders:', orders)

  // const productDelete = useSelector((state) => state.productDelete);
  // const { success: successDelete, error: errorDelete } = productDelete;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // const handleDelete = (id) => {
  //   if (window.confirm('Are you sure you want to delete this product?')) {
  //     dispatch(deleteProduct(id));
  //   }
  // }
  return (
    <div>
      {/* <Link to={'/addProduct'}>
      <button style={{ padding: 10, color: 'chocolate' }}>CREATE A NEW PRODUCT</button>
    </Link> */}
      <h1>orders:</h1>
      {/* {errorDelete && (<Error message={errorDelete} />)} */}
      {loading ? <Loader /> : error ? <Error message={error} />
        : (
            <OrderList orders={orders}/>
        )}
    </div>
  )
}

export default Orders