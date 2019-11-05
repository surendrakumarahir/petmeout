import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const CarouselSlider = (props) => {
    return (
        <>

            <div className='main'>
                <Carousel {...props}>
                    {
                        props.data.map((item, index) => {
                              return (
                                  <div key={index}>
                                      <img src={item.img} />
                                  </div>
                              )
                        })
                    }

                </Carousel>

            </div>
        </>
    );
};

export default CarouselSlider;
