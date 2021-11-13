import React from 'react';
import './Hotline.css'


const Hotline = () => {
    return (
        <div>
           
            <div className="top-banner-hotline">
                 <h1 className="big-txt-hotline">Hot-Line</h1>
                 <p className="text-white">Home / hot-line</p>
            </div>
            <div className="d-flex  text-start">
            <div class=" container">
                <h1 class="text-danger text-center mt-5 ">Contact to our Hotlines</h1>
                <p class="text-center">Don't hasitate to contact with us</p>

                <div class="p-5 my-5 text-center shadow-lg mx-3">
                    <p><i class="fas fs-1 fa-phone-volume text-dark"></i></p>
                    <h1 class="theme-color">Phone</h1>
                    <p>+8801644-555222</p>
                    <p>+8801644-666343</p>
                    <p>+8801644-234562</p>
                   

                </div>
                
                <div class="p-5 my-5 text-center  shadow-lg mx-3">
                    <p><i class="fab fs-1 fa-facebook-square text-primary"></i></p>
                    <h1 class="theme-color">Facebook</h1>
                    <a className="text-deco" href="https://www.Facebook.com/OneClick.Delivery">Visit our Facebook Page</a>

                </div>
                <div class="p-5 my-5 text-center shadow-lg mx-3">
                    <p><i class="fas fs-1 fa-paper-plane text-success"></i></p>
                    <h1 class="theme-color">Email</h1>
                    <p>ocd.support@gmail.com</p>

                </div>
                <div class="p-5 my-5 text-center shadow-lg mx-3">
                    <p><i class="fas fs-1 fa-map-marker-alt text-secondary"></i></p>
                    <h1 class="theme-color">Office Address</h1>
                    <p>House # 86 , 2nd Floor <br/> Galleria Shopping Complex , Zindabazar , Sylhet</p>

                </div>
                
                </div>
              
            </div>

            
        </div>
    );
};
export default Hotline;