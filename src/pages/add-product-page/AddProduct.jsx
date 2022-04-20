import React from 'react';
import { Link } from 'react-router-dom';


const AddProduct = () => {
  return (
    <div>
      <Link to={'/products'}>
        <button style={{ padding: 10, color: 'chocolate' }}>
          back to products
          </button>
      </Link>
    </div>
  )
}

export default AddProduct