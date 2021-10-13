import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../useFirebase/useFirebase';

const Header = () => {
    const { user, logout } = useFirebase();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            {user?.email &&
                <div><span>Sign in as {user.displayName}</span>
                    <Button onClick={logout} className="mx-2"> Sign Out</Button></div>
            }        </div>
    );
};

export default Header;