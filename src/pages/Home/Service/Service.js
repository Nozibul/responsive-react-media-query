import React from 'react';
import './service.css'

const Service = ({service}) => {
    const {name ,img, price} = service;
    return (
        <div className="single-service">
            <img src={img} alt="" /> 
            <h2> {name}</h2>
            <p>Price: {price}</p>

        </div>
    );
};

export default Service;