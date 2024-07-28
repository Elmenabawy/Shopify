import React from 'react';
import styles from './Profile.module.css';
import {jwtDecode} from 'jwt-decode';


export default function Profile() {
  let encodedToken = localStorage.getItem('userToken');
  let decodedToken = jwtDecode(encodedToken)
  return <>
    <h4>hello : {decodedToken.name} </h4>
  </>
}
