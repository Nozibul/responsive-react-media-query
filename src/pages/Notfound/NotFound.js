import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            {/* <img src="" alt="" /> */}
            <h2>Page not found</h2>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;