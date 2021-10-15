import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'

const Banner = () => {
    return (
        <div className="mt-5">
            {/* <h2>this is banner</h2> */}
            <Carousel>
            <Carousel.Item>
                <img style={{maxHeight:"500px"}}
                className="d-block w-100 "
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  style={{maxHeight:"500px"}}
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{maxHeight:"500px"}}
                className="d-block w-100"
                src={banner1}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel> 
        </div>
    );
};

export default Banner;