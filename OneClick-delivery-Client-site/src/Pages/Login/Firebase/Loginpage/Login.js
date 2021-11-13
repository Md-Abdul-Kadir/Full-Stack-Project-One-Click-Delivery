import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const [ email, setemail ] = useState('');
    const [ pass, setpass ] = useState('');
    const { signInUsingGoogle, user,signinMailandPass } = useAuth();
   

    const handleEmailchange = e => {
         setemail(e.target.value);
        // console.log(email);
        
    }
    const handlePassChange = e => {
        setpass(e.target.value);
        // console.log(pass);
       
    }
    const handleLogin = e => {
        // console.log(email);
        // console.log(pass);
        signinMailandPass(email, pass);
        e.preventDefault();
    }
    return (
        <div>
           
            <div className="top-banner-hotline">
                 <h1 className="big-txt-hotline">Log-In</h1>
                 <p className="text-white">Home / log-in</p>
            </div>
            <div className=" py-5 container margin10 ">
            <form onSubmit={handleLogin}>
                <input onBlur={handleEmailchange} type="email" className="form-control" placeholder="Email" /> <br/ >
                <input onBlur={handlePassChange} type="password" className="form-control" placeholder="Password" /><br />
                <input type="submit" className="btn-secondary px-5 py-2" value="Login" />
                </form>
                <p className="my-4">New to Achevement Gym ?<Link to="/signin"> Sign in</Link></p>
                <button onClick={signInUsingGoogle} className="btn-secondary px-5 py-2 ">Google Sign In</button>
                
            </div>

            
        </div>
    );
};


export default Login;