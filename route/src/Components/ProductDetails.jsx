import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Port 5000 and /api/ path is very important
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.error(err);
        setError("Product details load aagala!");
      });
  }, [id]);

  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;
  if (!product) return <div className="text-center mt-5">Loading... Please wait...</div>;

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={product.image} className="img-fluid" alt={product.name} style={{ maxWidth: '400px', borderRadius: '10px' }} />
        </div>
        <div className="col-lg-6">
          <h2 className="font-weight-bold">{product.name}</h2>
          <p className="price text-success h4">₹{product.price}</p>
          <p>Fresh organic produce from Vegefoods.</p>
          <button className="btn btn-success px-5 py-3">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;