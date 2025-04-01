import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return ( 
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-md-6 text-center'>
                    <img src={imageURL} alt={productName} className="img-fluid" />
                </div>
                <div className='col-md-6'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="d-flex flex-column">
                        <a href={tryDemo} className="btn btn-primary mb-2">Try Demo</a>
                        <a href={learnMore} className="btn btn-outline-secondary mb-2">Learn More</a>
                        <div className="d-flex">
                            <a href={googlePlay} className="me-3">
                                <img src={googlePlay} alt="Google Play" width="150" />
                            </a>
                            <a href={appStore}>
                                <img src={appStore} alt="App Store" width="150" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default LeftSection;
