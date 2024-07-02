import React from 'react';
import styles from './Register.module.css';
import { useFormik } from 'formik';
import RegImg from '../../../src/Assets/images/Login.gif';
import * as yup from 'yup';

export default function Register() {
  function submitRegister(values) {
    console.log(values);
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

  let validationSchema = yup.object({
    name: yup.string().required('Name is required').min(3).max(50),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    phone: yup.string().matches(phoneRegExp, 'Invalid phone number').required('Phone is required'),
  });

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },
    validationSchema,
    onSubmit: submitRegister
  });

  return (
    <>
      <div className="container w-75 mx-auto shadow-l rounded my-3 py-3">
        <div className="row">
          <div className="col-md-6">
            <img src={RegImg} alt="Registeration-img" className='w-100 mt-4' />
          </div>
          <div className="col-md-6 my-5 px-3">
            <div className="form">
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  className='form-control mb-3'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                />
                {formik.errors.name && formik.touched.name ? <div className="alert alert-danger p-2">{formik.errors.name}</div> : ''}

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

                <label htmlFor="rePassword">Confirm Password</label>
                <input
                  className='form-control mb-3'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.rePassword}
                  type="password"
                  name="rePassword"
                  id="rePassword"
                  placeholder="Confirm password"
                />
                {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger p-2">{formik.errors.rePassword}</div> : ''}

                <label htmlFor="phone">Phone Number</label>
                <input
                  className='form-control mb-3'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                />
                {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger p-2">{formik.errors.phone}</div> : ''}

                <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
