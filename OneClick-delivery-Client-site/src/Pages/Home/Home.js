import React from 'react';
import NotFound from '../Notfound/NotFound';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="top_banner">
                <div className='bannerText'>
                    <h1 className="bannerInfo">We Provide Delivery <br /> Within 30 Min </h1>
                    <p className="text-light">All orders placed before 2pm Monday - Thursday, <br /> where 1-2 delivery has been selected, are dispatched on the same day.</p>
                    <a href="#"><button className="btn btn-danger px-5 py-2 fs-5">Order Now</button></a>
                </div>
              
            </div>
        </div>
    );
};

export default Home;