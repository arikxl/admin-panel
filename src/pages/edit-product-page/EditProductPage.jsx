import React from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { PRODUCT_CREATE_RESET } from '../../redux/constants/productsConstants';
import { createProduct } from '../../redux/actions/productActions';
import Error from '../../components/Loaders/Error';
import Loader from '../../components/Loaders/Loader/Loader';



const EditProductPage = () => {

    const id = useParams().id;

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);
  
    const dispatch = useDispatch();
    const productCreate = useSelector((state) => state.productCreate);
    const { loading, error, product } = productCreate;
  
    useEffect(() => {
      if (product) {
        window.alert('Product created successfully');
        dispatch({ type: PRODUCT_CREATE_RESET });
        setTitle('');
        setPrice(0);
        setImg('');
        setDescription('');
        setStock(0);
      }
    }, [product, dispatch]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createProduct(title, price, img, description, stock));
    }



    return (
   <div className='flex column'>
      <Link to={'/products'}>
        <button style={{ padding: 10, color: 'chocolate' }}>
          back to products
        </button>
      </Link>

      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        {error && <Error message={error} />}
        {loading && <Loader />}

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
        <button type='submit'>Create Now</button>
      </form>
    </div>
  )
}

export default EditProductPage