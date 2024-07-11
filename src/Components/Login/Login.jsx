import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import RegImg from '../../../src/Assets/images/Login.gif';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

export default function Login() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();  
  let {setUserToken} = useContext(UserContext);
  async function submitLogin(values) {
    setIsLoading(true);
    try {
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values);
      if (data.message === 'success') {
        localStorage.setItem('userToken', data.token);
        setUserToken(data.token);
        setIsLoading(false);
        navigate('/');
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
    }
  }

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

  let validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .matches(passwordRules, { message: "Invalid password" })
      .required("Required"),
  });

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: submitLogin
  });

  return (
    <div className="container w-75 mx-auto shadow-l rounded my-3 py-3">
      <div className="row">
        <div className="col-md-6">
          <img src={RegImg} alt="Registeration-img" className='w-100 mt-4 ' />
        </div>
        <div className="col-md-6 my-5">
          <div className="form">
            <form onSubmit={formik.handleSubmit}>
              {error !== null ? <div className="alert alert-danger">{error}</div> : ""}

              <label htmlFor="email">Email</label>
              <input
                className='form-control mb-3'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              {formik.errors.email && formik.touched.email ? <div className="alert alert-danger p-2">{formik.errors.email}</div> : ''}

              <label htmlFor="password">Password</label>
              <input
                className='form-control mb-3'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
              {formik.errors.password && formik.touched.password ? <div className="alert alert-danger p-2">{formik.errors.password}</div> : ''}
              {isLoading ? <button type="button" className='btn bg-main text-white'>
                <i className='fas fa-spinner fa-spin'></i>
              </button> : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Submit</button>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
