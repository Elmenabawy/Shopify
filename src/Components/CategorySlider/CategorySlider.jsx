import React from 'react';
import styles from './CategorySlider.module.css';
import { useQuery } from 'react-query';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { object } from 'yup';

export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  function getCategories() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
  }

  const { data, isLoading } = useQuery('getCategories', getCategories);
  console.log(data?.data.data);

  

  return <>
    {data?.data.data ?
    <div className='py-5 my-5'>
        <Slider {...settings}>
          {data?.data.data.map((category) => (
            <img height={200} key={category._id} src={category.image} className='w-100' alt={category.name} />
          ))}
        </Slider>
    </div>
    :''}
  </>
    
}
