import React, { useContext } from 'react';
import styles from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { CartContext } from '../../Context/CartContext';

export default function ProductDetails() {
  let params = useParams();

  const { addToCart } = useContext(CartContext);

  async function addProduct(productId) {
    try {
      const response = await addToCart(productId);
      console.log(response);
      toast.success('Product is successfully added');
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error('Something went wrong');
    }
  }

  

  function getProductDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  const { data, isLoading, error } = useQuery('productDetails', () => getProductDetails(params.id))


  console.log(data);
  return <>
  <Helmet>
    <title>
      {data?.data.data.title}
    </title>
  </Helmet>
    <div className="row align-items-center my-4">
      <div className="col-md-4">
        <img className='w-100' src={data?.data.data.imageCover} alt={data?.data.data.title} />
      </div>
      <div className="col-md-8 ">
        <div className="context">
          <h2>{data?.data.data.title}</h2>
          <p>{data?.data.data.description}</p>
          <h5 className='text-main fw-bolder'>{data?.data.data.category.name}</h5>
          <div className="d-flex justify-content-between">
            <h5 className='text-main '>{data?.data.data.price} EGP</h5>
            <span className='float-end my-2 mb-3'>
              <i className='fas fa-star rating-color'> {data?.data.data.ratingsAverage}</i>
            </span>
          </div>


          <button onClick={() => addProduct(data?.data.data.id)} className='btn bg-main text-white w-100'>Add to cart</button>
        </div>
      </div>
    </div>
  </>
}
