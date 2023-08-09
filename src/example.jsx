import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Example() {
  return (
    <>
    <div className='container'>
     <Carousel>
        <div>
            <img src="https://i.pinimg.com/originals/e3/4d/c3/e34dc34286f9f2f9b0377f34241f2510.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="https://i.pinimg.com/originals/e3/4d/c3/e34dc34286f9f2f9b0377f34241f2510.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="https://i.pinimg.com/originals/e3/4d/c3/e34dc34286f9f2f9b0377f34241f2510.jpg" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    </div>
    </>
  )
}
