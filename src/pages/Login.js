import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    if (gUser) {

        navigate(from, { replace: true });
    }

    return (
        <div >
            <button 
                onClick={() => signInWithGoogle()}
                className="btn btn-info d-flex my-5 m-auto"
            >Continue with Google</button>
        </div>
    );
};

export default Login;