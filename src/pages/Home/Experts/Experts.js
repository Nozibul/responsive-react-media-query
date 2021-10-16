import React from 'react';

import mechanic1 from '../../../images/mechanic/1.jpg'
import mechanic2 from '../../../images/mechanic/2.jpg'
import mechanic3 from '../../../images/mechanic/3.jpg'
import mechanic4 from '../../../images/mechanic/4.jpg'
import Expert from '../Expert/Expert';

   const exparts=[
        {img:mechanic1, name:'Anderson', expertize:'coloring Expert'},
        {img:mechanic2, name:'Johnson', expertize:'engine Expert'},
        {img:mechanic3, name:'Smith', expertize:'polish Expert'},
        {img:mechanic4, name:'Baliksan', expertize:'coloring Expert'},
    ]


const Experts = () => {

 
    return (
         <div id="experts" className="container mt-3 mb-3 ">
             <h1 className="text-success mb-5">Our Experts...!!!!!!</h1>
            <div className="row">
               {
                   exparts.map(expert=><Expert
                    expert={expert}
                   ></Expert>)
               }
              
            </div>
         </div>
    );
};

export default Experts;