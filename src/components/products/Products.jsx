import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../Loaders/Loader/Loader';
import Error from '../Loaders/Error';
import { deleteProduct, listProducts } from '../../redux/actions/productActions';

const Products = () => {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { success: successDelete, error: errorDelete } = productDelete;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, successDelete]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(id));
    }
  }

  return (
    <div>
      <Link to={'/addProduct'}>
        <button style={{ padding: 10, color: 'chocolate' }}>CREATE A NEW PRODUCT</button>
      </Link>
      <h1>products:</h1>
      {errorDelete && (<Error message={errorDelete} />)}
      {loading ? <Loader /> : error ? <Error message={error} />
        : (
          <>

            <div className='flex wrap'>
              {products?.map((product) => (
                <div key={product._id} className="product-item">
                  <img src={product.img} alt="" loading='lazy'/>
                  {product.title}
                  <br />
                  ${product.price}
                  <div>
                    <Link to={`/product/${product._id}/edit`}>
                      <button>🖋</button>
                    </Link>
                    <button onClick={() => handleDelete(product._id)}>❌</button>
                  </div>
                </div>

              ))}
            </div>
          </>
        )}
    </div>
  )
}

export default Products