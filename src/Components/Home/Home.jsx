import React from 'react';
import styles from './Home.module.css';
import CategorySlider from '../CategorySlider/CategorySlider';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import MainSlider from '../MainSlider/MainSlider';
import { Helmet } from 'react-helmet';

export default function Home() {
  return <>
  <Helmet>
    <title>Shopify</title>
  </Helmet>
    <MainSlider />
    <CategorySlider />
    <FeaturedProducts />
  </>
}
