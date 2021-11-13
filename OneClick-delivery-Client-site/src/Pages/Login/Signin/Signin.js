import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Firebase/Hooks/useAuth';
import './Signin.css'

const Signin = () => {
    const {signInUsingGoogle,auth,setuser,registerWithMailandPass } = useAuth();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmailchange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePasschange = e => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    const handleRegister = e => {
        console.log(email, password);
        registerWithMailandPass(email,password);
        e.terminate();
    }
    return (
        <div>
           
            <div className="top-banner-hotline">
                 <h1 className="big-txt-hotline">Sign-In</h1>
                 <p className="text-white">Home / sign-in</p>
            </div>
            <div className="py-5 container margin10">
            <form onSubmit={handleRegister}>
                    <input type="text" className="form-control" placeholder="Enter User Name" /><br />
                    <input onBlur={handleEmailchange} type="email" className="form-control" placeholder="Email" /> <br/ >
                    <input onBlur={handlePasschange } type="password" className="form-control" placeholder="Password" /><br />
                    
                    <input type="submit" className="btn-secondary px-5 py-2" value="Register" />
                        </form>
                    <p className="my-3">Already register ?<Link to="/login"> Log In</Link></p>
                    <button onClick={signInUsingGoogle} className="btn-secondary my-2 px-5 py-2">Google Sign In</button>
              
            </div>

            
        </div>
    );
};

export default Signin;