import React from 'react';
import styles from './Home.module.css';
import CategorySlider from '../CategorySlider/CategorySlider';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import MainSlider from '../MainSlider/MainSlider';

export default function Home() {
  return <>
    <MainSlider />
    <CategorySlider />
    <FeaturedProducts />
  </>
}
