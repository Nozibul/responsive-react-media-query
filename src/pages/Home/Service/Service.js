import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({service}) => {
    const {id ,name ,img, price} = service;
    return (
        <div className="single-service pb-3">
            <img src={img} alt="" /> 
            <h2 className="mt-3"> {name}</h2>
            <p>Price: {price}</p>
             <Link to={`booking/${id}`}>
               <button className="btn btn-success">Booking {name.toLowerCase()}</button>
             </Link>
        </div>
    );
};

export default Service;