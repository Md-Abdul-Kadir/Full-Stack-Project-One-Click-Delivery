import React from 'react';
import './Footer.css'
import logo from '../../images/logomotion.png'

const Footer = () => {
    return (
        <div className="bg-dark text-light py-4">
            <h2 className="fs-2 logo text-light pt-5"><img height="80px" src={logo} className="p-1 pb-2" alt="" /> OneClick <span className="text-danger">Delivery</span></h2>
            <p className="gray">Live as if you were to die tomorrow. Learn as if you were to live forever.</p> 
            <h6><small> &copy; All rights reserved by OneClick Delivery</small></h6> 
        </div>
    );
};

export default Footer;

