import React, { useState } from 'react';
import styles from './Brands.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  // function getBrand(){
  //   return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`)
  //   }

  function getAllBrands(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

  const { data, isLoading } = useQuery('AllBrands', getAllBrands);
  console.log(data);
  return <>
    <div>
      <div className="row">
        {data?.data.data.map((brand) => 
          <div className="col-md-3" key={brand._id}>
            <img  src={brand.image} alt={brand.slug} className='w-100 cursor-pointer' />
        </div>)}
      </div>
    </div>
  </>
}
