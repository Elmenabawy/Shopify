import React from 'react';
import styles from './Home.module.css';
import CategorySlider from '../CategorySlider/CategorySlider';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';

export default function Home() {
  return <>
    <CategorySlider />
    <FeaturedProducts />
  </>
}
