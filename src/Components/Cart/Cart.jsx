import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css';
import { CartContext } from '../../Context/CartContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import toast from 'react-hot-toast';


export default function Cart() {
  const { getLoggedUserCart, removeFromCart } = useContext(CartContext);
  const [cartDetails , setCartDetails ]= useState(null);


  // async function removeItem(productId){
  //   const {data} = await removeFromCart(productId);
  //   setCartDetails(data)
  // }
  async function removeItem(productId) {
    const myPromise = removeFromCart(productId);
    toast.promise(
      myPromise,
      {
        loading: 'Removing item...',
        success: 'Item removed successfully!',
        error: 'Error removing item',
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 3000,
        },
      }
    );
    const { data } = await myPromise;
    setCartDetails(data);
  }



  async function getCart(){
    let {data} = await getLoggedUserCart();
    setCartDetails(data);
  }
  useEffect(()=>{
    getCart();
  },[]);
  
  return <>
    {cartDetails ? 
    <div className='w-75 mx-auto bg-main-light p-3 my-3'>
      <h2>Shopping Cart</h2>
        <h4 className='h6 text-main fw-bolder '>Cart Items: {cartDetails.numOfCartItems}</h4>
        <h4 className='h6 text-main fw-bolder mb-4'>Total Cart Price : {cartDetails.data.totalCartPrice}</h4>
        {cartDetails.data.products.map((product) => <div className='row py-2 border-bottom d-flex justify-content-between align-items-center' key={product.product.id}>
            <div className="col-md-2">
              <img src={product.product.imageCover} alt={product.product.title} className='w-100'  />
            </div>
            <div className="col-md-10">   
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className='h6'>{product.product.title.split(' ').slice(0,3).join('')}</h4>
                  <h4 className='h6 text-main'> Price : {product.price} EGP</h4>
                <button  onClick={() => removeItem(product.product.id)} className='btn btn-danger px-5'><i className=' fa-solid fa-trash text-white'></i></button>
                </div>

                <div>
                <button className={styles.noBorder}><i className="fa-solid fa-square-plus text-main h4"></i></button>
                <span className='h5 fw-bolder'>{product.count}</span>
                <button  className={styles.noBorder}><i className="fa-solid fa-square-minus text-main h4"></i></button>
                
                </div>
              </div>
            </div>
            
          </div>)}


      </div> : (
        <div className="w-75 mx-auto bg-main-light p-3 my-3">
          <h2><Skeleton width={150} /></h2>
          <h4 className="h6 text-main fw-bolder"><Skeleton width={100} /></h4>
          <h4 className="h6 text-main fw-bolder mb-4"><Skeleton width={150} /></h4>
          {Array(3).fill().map((_, index) => (
            <div className="row py-2 border-bottom" key={index}>
              <div className="col-md-3">
                <Skeleton height={100} />
              </div>
              <div className="col-md-9">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="h6"><Skeleton width={100} /></h4>
                    <h4 className="h6 text-main"><Skeleton width={80} /></h4>
                    <Skeleton width={100} height={30} />
                  </div>
                  <div>
                    <Skeleton width={30} height={30} />
                    <span className="h5 fw-bolder"><Skeleton width={30} /></span>
                    <Skeleton width={30} height={30} />
                  </div>
                </div>
              </div>
            </div>
          )) }
        </div>
      )}
  </>
}
