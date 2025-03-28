import React from 'react';

function Team() {
    return ( 
        <div className ="container">
             <div className='row p-5   mt-5 mb-5'>
                <h1 className=' text-center border-top mt-5'>People</h1>
            </div>
        <div className='row p-5 mt-5 border-top text-muted fs-6' style={{lineHeight:"1.8",fontSize:"1.2em"}}>
            <div className='col-6 p-5'>
               <img src="media/ceo.jpg" alt="" />
            </div>
            <div className='col-6 p-5'>
                <p>
                In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                </p>
                <p>
                <a href="" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                </p>
                <p>
                And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us. 
                </p>
            </div>
        </div>
    </div>
     );
}

export default Team;