import React from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { PRODUCT_CREATE_RESET, PRODUCT_UPDATE_RESET } from '../../redux/constants/productsConstants';
import { createProduct, editProduct, updateProduct } from '../../redux/actions/productActions';
import Error from '../../components/Loaders/Error';
import Loader from '../../components/Loaders/Loader/Loader';



const AddProduct = ({ form }) => {

  const productIdFromParams = useParams().id;

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);

  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const productCreate = useSelector((state) => state.productCreate);
  const productEdit = useSelector((state) => state.productEdit);
  const { loading, error, product } = form === 'create'
    ? productCreate : productEdit;

  const productUpdate = useSelector((state) => state.productUpdate);
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = productUpdate;

  useEffect(() => {

    if (form === 'create') {
      if (product) {
        window.alert('Product created successfully');
        dispatch({ type: PRODUCT_CREATE_RESET });
        setTitle('');
        setPrice(0);
        setImg('');
        setDescription('');
        setStock(0);
      }
    } else {
      if (!product.title || product._id !== productIdFromParams) {
        dispatch(editProduct(productIdFromParams));
      }
      else {
        setTitle(product.title);
        setPrice(product.price);
        setImg(product.img);
        setDescription(product.description);
        setStock(product.stock);
      }
    }
  }, [product, dispatch, productIdFromParams, form]);

  // this useEffect for updating product
  useEffect(() => {
    if (form === 'edit') {

      if (successUpdate) {
        dispatch({ type: PRODUCT_UPDATE_RESET });
        window.alert('Product updated successfully');
        setTitle('');
        setPrice(0);
        setImg('');
        setDescription('');
        setStock(0);
      } else {
        if (!product.title || product._id !== productIdFromParams) {
          dispatch(editProduct(productIdFromParams));
        }
        else {
          setTitle(product.title);
          setPrice(product.price);
          setImg(product.img);
          setDescription(product.description);
          setStock(product.stock);
        }
      }
    }
  }, [product, productIdFromParams, dispatch, successUpdate, form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form === 'create') {
      dispatch(createProduct(title, price, img, description, stock))
    } else {
      dispatch(updateProduct({ title, price, img, description, stock, _id: productIdFromParams }))
    }
  }

  return (
    <div className='flex column'>
      <Link to={'/products'}>
        <button style={{ padding: 10, color: 'chocolate' }}>
          back to products
        </button>
      </Link>

      <form onSubmit={handleSubmit}>
        <h1>{
          form === 'create' ? 'Add Product' : `Edit Product ${productIdFromParams}`
        }
        </h1>
        {error && <Error message={error} />}
        {errorUpdate && <Error message={errorUpdate} />}
        {loading && <Loader />}
        {loadingUpdate && <Loader />}

        <div>
          <label htmlFor='product_title'>product title: </label>
          <input type="text" id='product_title'
            required placeholder='enter robot name'
            value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor='product_price'>product price: </label>
          <input type="number" id='product_price' min={0}
            required placeholder='enter robot price'
            value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor='product_description'>product description: </label>
          <input type="text" id='product_description'
            required placeholder='enter robot description'
            value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label >product stock: </label>
          <input type="number" min={0}
            required placeholder='enter robot stock'
            value={stock} onChange={(e) => setStock(e.target.value)} />
        </div>
        <div>
          <label>product img: </label>
          <input type="text"
            required placeholder='enter robot image'
            value={img} onChange={(e) => setImg(e.target.value)} />
        </div>
        <button type='submit'>
          {
            form === 'create' ? 'Create Now' : 'Edit Now'
          }
        </button>
      </form>
    </div>
  );
};

export default AddProduct;