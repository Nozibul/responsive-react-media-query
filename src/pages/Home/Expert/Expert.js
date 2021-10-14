import React from 'react';

const Expert = ({expert}) => {
    const {img, name ,expertize} = expert;
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Expertize: {expertize}</h4>
        </div>
    );
};

export default Expert;