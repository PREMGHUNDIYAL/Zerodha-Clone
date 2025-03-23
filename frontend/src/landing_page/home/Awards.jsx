import React from 'react'

function Awards () {
    return ( 
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-md-6 p-5">
                <img src="media/side1.png"  alt="image" />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order 
                    volumes in India daily by trading and investing in </p>
                    <div className="row mt-5">
                        <div className="col-6">
                        <ul>
                        <li>
                            <p>Future and option</p>
                        </li>
                        <li>
                            <p>Commodity and derivatives</p>
                        </li>
                        <li>
                            <p>Currency Derivaties</p>
                        </li>
                       </ul>
                        </div>
                        <div className="col-6">
                        <ul>
                        <li>
                            <p>Future and option</p>
                        </li>
                        <li>
                            <p>Commodity and derivatives</p>
                        </li>
                        <li>
                            <p>Currency Derivaties</p>
                        </li>
                       </ul>
                        </div>
                    
                    </div>
                    <img src="media/press-logos.png" style={{width:"90%"}} alt="" />
                </div>
            </div>
        </div>
     );
}


export default Awards;
