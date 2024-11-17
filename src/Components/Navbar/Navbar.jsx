import React, {  useContext } from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/freshcart-logo.svg'
import { UserContext } from '../../Context/UserContext';

export default function Navbar() {
  let {userToken , setUserToken} = useContext(UserContext);
  let navigate = useNavigate();
  function logout(){
    setUserToken(null);
    localStorage.removeItem('userToken');
    navigate('/login');
  }


  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="fresh cart logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userToken !== null ? <>
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brands">Brands</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>


            </ul>
          </> : ''}
          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {userToken !== null ? <li className="nav-item">
              <li className="nav-item d-flex align-items-center">
                <Link className="nav-link" to="/profile">
                  <i className="fa-solid fa-user"></i>
                </Link>
              </li>
              <span onClick={()=> logout()} className="nav-link cursor-pointer" >Logout</span>
            </li> 
            :<>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
            </>
             }
          </ul>

        </div>
      </div>
    </nav>
  </>
}
