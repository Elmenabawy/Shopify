import React, { useContext } from 'react';
import styles from './Profile.module.css';
import {jwtDecode} from 'jwt-decode';
import { UserContext } from '../../Context/UserContext';

//TODO add context to profile
export default function Profile() {
  const { userToken } = useContext(UserContext) 
  const decoded = jwtDecode(userToken);
  return <>
  <div className='my-5 w-50 m-auto'>
    <div className="row bg-light p-4 d-flex justify-content-center align-items-center rounded shadow">
      <div className="col-md-2">
          <i className="fa-solid fa-user" style={{ fontSize: '50px' }}></i>
      </div>
      <div className="col-md-10">
          <h4>{decoded?.name} </h4>
          <h4>{decoded?.role} </h4>
      </div>
    </div>
  </div>


  </>
}
