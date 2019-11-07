import React from "react";
import { Header , Footer } from "../layouts"

import CarouselSlider from "../components/sliders/Carousel";
import Categories from '../components/Categories';
import { sliderData }   from "../data";
import  SignIn from  "../components/SignIn";

const Home = () => {
  return (
  	<>
  	  <Header/>
       <div className='main'>
           <div style={{position:"relative"}}>
               <CarouselSlider showThumbs={false} autoPlay={true} dynamicHeight={true} data={sliderData} />
               <SignIn/>
           </div>
        </div>
       <Categories />
      <Footer/>
    </>
  );
};

export default Home;
