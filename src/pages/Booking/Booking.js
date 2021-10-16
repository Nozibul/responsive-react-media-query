import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {bookingId} = useParams();
    return (
        <div>
            <h2>This is booking {bookingId}</h2>
        </div>
    );
};

export default Booking;