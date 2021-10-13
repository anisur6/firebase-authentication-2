import React, { createContext } from 'react';
import useFirebase from '../useFirebase/useFirebase';


const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    // const { children } = props;
    const allContext = useFirebase();
    return (
        //ai provider ke & kano ???
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;