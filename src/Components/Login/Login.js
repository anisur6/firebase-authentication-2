import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../useFirebase/useFirebase';



const Login = () => {

    const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook } = useFirebase();

    return (
        <div className="mt-5">
            <h1 >Please login</h1>
            <div className="mt-5">
                <Button onClick={signInUsingGoogle} className="mx-1" variant="danger">Sign In With Google</Button>
                <Button onClick={signInUsingFacebook} className="mx-1" variant="info">Sign In With FaceBook</Button>
                <Button onClick={signInUsingGithub} className="mx-1" variant="dark">Sign In With Github</Button>
            </div>
            <hr />
            <Link to="/register">New User ? </Link>
        </div>
    );
};

export default Login;