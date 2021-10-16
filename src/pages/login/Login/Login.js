import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {signInGoogle} = useAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInGoogle} className="btn btn-success">google Sign In</button>
        </div>
    );
};

export default Login;