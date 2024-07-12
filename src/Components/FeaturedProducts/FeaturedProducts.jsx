import React from 'react';
import styles from './FeaturedProducts.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

export default function FeaturedProducts() {
  function getFeaturedProducts() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  const { data, isLoading } = useQuery('FeaturedProducts', getFeaturedProducts);
  const products = data?.data.data;

  return (
    <div className="py-2">
      <h2>FeaturedProducts</h2>
      <div className="row">
        {isLoading ? (
          Array(6).fill(0).map((_, index) => (
            <div key={index} className="col-md-2">
              <div className="product cursor-pointer py-3 px-2">
                <Skeleton height={200} />
                <Skeleton count={3} />
                <Skeleton width="60%" />
                <Skeleton height={30} className="mt-2" />
              </div>
            </div>
          ))
        ) : (
          products.map((product) => (
            <div key={product.id} className="col-md-2">
              <Link to={`/productdetails/${product.id}`}>
                <div className="product cursor-pointer py-3 px-2">
                  <img src={product.imageCover} alt={product.title} className="w-100" />
                  <span className='text-main font-sm fw-bolder'>{product.category.name}</span>
                  <h3 className="h6">{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                  <div className="d-flex justify-content-between mt-3">
                    <span>{product.price} EGP</span>
                    <span><i className='fas fa-star rating-color'></i> {product.ratingsAverage}</span>
                  </div>
                  <button className='btn bg-main text-white w-100 btn-sm mt-2'>add to cart</button>
                </div>
              </Link>
              
            </div>
          ))
        )}
      </div>
    </div>
  );
}
