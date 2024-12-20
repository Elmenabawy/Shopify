import React from 'react';
import styles from './Categories.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link ,useNavigateor} from 'react-router-dom';

export default function Categories() {
  function getAllCategories(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
  const {data, isLoading, isError} = useQuery('categories', getAllCategories)

  return <>
    <div>
      <div className="row">
        {data?.data.data.map((category)=>
        <div className="col-md-3 py-3" key={category._id}>
            <Link to={`/categories/${category._id}`} className="cursor-pointer py-3 px-2">
              <img height={200} src={category.image} alt={category.name}className='w-100' />
              <h5 className='h4 text-main text-center'>{category.name}</h5>
            </Link>
        </div>
        )}
      </div>
    </div>
  </>
}
