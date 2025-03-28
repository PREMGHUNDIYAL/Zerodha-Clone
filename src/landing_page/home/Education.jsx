import React from 'react'

function Education() {
    return ( 
      <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <img src="media/education.svg" alt="" className="img-fluid" style={{ maxWidth: "100%" }} />
            </div>
            <div className="col-md-6">
                <h1 className='mb-5'> Free and open market education</h1>
                <p className='mb-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" className='mb-5' style={{textDecoration:"none"}}>Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                <p className='mb-5 mt-5'> TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                
            </div>
        </div>
      </div>
     );
}

export default Education;