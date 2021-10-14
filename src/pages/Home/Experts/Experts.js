import React from 'react';

import mechanic1 from '../../../images/mechanic/1.jpg'
import mechanic2 from '../../../images/mechanic/2.jpg'
import mechanic3 from '../../../images/mechanic/3.jpg'
import mechanic4 from '../../../images/mechanic/4.jpg'

const ourExparts=[
    {img:mechanic1, name:'Anderson', expertize:'coloring Expert'},
    {img:mechanic2, name:'Johnson', expertize:'engine Expert'},
    {img:mechanic3, name:'Smith', expertize:'polish Expert'},
    {img:mechanic4, name:'Baliksan', expertize:'coloring Expert'}
]

const Experts = () => {
    return (
        <div className="container mt-5 mb-3 text-success">
            <h1>Our Experts...!!!!!!</h1>
            <div className="row">
               {
                    ourExparts.map(expert=> <Experts 
                        key={expert.name}
                        expert={expert}
                       ></Experts>)
               }
            </div>
        </div>
    );
};

export default Experts;