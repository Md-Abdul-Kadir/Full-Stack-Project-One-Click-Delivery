import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect } from "react";
import InitializeAuthentication from "../Firebase/firebase.init";



InitializeAuthentication();


const useFirebase = () => {
    const [user, setuser] = useState({});
    const [isLoding, setIsLoding] = useState(true);

    const auth = getAuth();
    


    const signInUsingGoogle = () => {
       
        setIsLoding(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setuser(result.user);
 
            })
             .finally(()=>setIsLoding(false));
      
        
    }
    const registerWithMailandPass=(email, password) => {
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setuser(userCredential.user);
            // ...
        })

        
    }

    const signinMailandPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
               setuser(userCredential.user);
                
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
            }
            else {
                setuser({});
            }
            setIsLoding(false);
        })
    }, []);

    const logOut = () => {
        setIsLoding(true);
        signOut(auth).then(() => {
            setuser('');
          }).finally(()=>setIsLoding(false));

    }
    
    return {
        user,
        auth,
        signInUsingGoogle,
        registerWithMailandPass,
        signinMailandPass,
        logOut,
        isLoding,
    }
}

export default useFirebase;