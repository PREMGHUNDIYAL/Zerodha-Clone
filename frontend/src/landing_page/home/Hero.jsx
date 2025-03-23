import React from 'react'

function Hero() {
    return (  
        <div class="container p-5 mb-5" >
            <div class="row text-center">
                 <img src="media/landing.png" className='mb-5'></img>
                 <h1 className='mt-5'>Invest In Everything</h1>
                 <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                 <button className='p-2  btn btn-primary fs-5' style={{width:"20%",margin:"0 auto",}}>Signup Now</button>   
            </div>
        </div>
    );
}

export default Hero;
