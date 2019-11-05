import React from "react";
import { Header , Footer } from "../layouts"

import CarouselSlider from "../components/sliders/Carousel";
import Categories from '../components/Categories';
import { sliderData }   from "../data";

const Home = () => {
  return (
  	<>
  	  <Header/>
       <div className='main'>
           <CarouselSlider showThumbs={false} autoPlay={true} dynamicHeight={true} data={sliderData} />
        </div>
       <Categories />
      <Footer/>
    </>
  );
};

export default Home;
