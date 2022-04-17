import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loaders/Loader/Loader';
import Error from '../Loaders/Error';
import { listProducts } from '../../redux/actions/productActions';

const Products = () => {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
            {loading ? <Loader /> : error ? <Error message={error} />
        : (
          <>
            <h1>products:</h1>
            <div className='flex column'>
              {products?.map((product) => (
                <div key={product._id} className="product-item">
                  <img src={product.img} alt="" />
                  {product.title}
                  <br />
                  ${product.price}
                  <div>
                    <button>🖋</button>
                    <button>❌</button>
                  </div>
                  </div>
                // <UserItemStyled key={user._id}>
                //   <img src={`https://avatars.dicebear.com/api/bottts/${user._id}.svg`}
                //    alt="" />
                //   <h3>{user.name}</h3>
                //   <p>{user.isAdmin ? 'Admin' : 'User'}</p>
                //   <a href={`mailto:${user.email}`}>{user.email}</a>
                // </UserItemStyled>
              ))}
            </div>
          </>
        )}
    </div>
  )
}

export default Products