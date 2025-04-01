import React from 'react';

function RightSection({ imageURL, productName, productDescription, tryDemo, learnMore }) {
    return ( 
        <div className='container mt-5'>
            <div className='row align-items-center'>
                {/* Text on the left */}
                <div className='col-md-6'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="d-flex flex-column">
                        <a href={tryDemo} className="btn btn-primary mb-2">Try Demo</a>
                        <a href={learnMore} className="btn btn-outline-secondary mb-2">Learn More</a>
                    </div>
                </div>

                {/* Image on the right */}
                <div className='col-md-6 text-center'>
                    <img src={imageURL} alt={productName} className="img-fluid" />
                </div>
            </div>
        </div> 
    );
}

export default RightSection;
