import { useEffect, useState } from "react"
import initializeauthentic from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, FacebookAuthProvider  } from "firebase/auth";






initializeauthentic();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, seterror] = useState('');




    const auth = getAuth();


    const provider = new GoogleAuthProvider();
    const gitprovider = new GithubAuthProvider();
    const facebookprovider = new FacebookAuthProvider();



    const signInUsingGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setuser(result.user)
            })
            .catch(error => {
                seterror(error.message)
            })
    }

    //git hub programm
    const signInUsingGithub = () => {
        signInWithPopup(auth, gitprovider)
            .then(result => {
                console.log(result.user);
                setuser(result.user)
            })
            .catch(error => {
                seterror(error.message)
            })
    }


    //git hub programm
    const signInUsingFacebook = () => {
        signInWithPopup(auth, facebookprovider)
            .then(result => {
                console.log(result.user);
                setuser(result.user)
            })
            .catch(error => {
                seterror(error.message)
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setuser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log("inside state Change", user);
                setuser(user);
            }
        })
    }, [auth])
    return {
        user,
        error,
        signInUsingGoogle,
        logout,
        signInUsingGithub,
        signInUsingFacebook
    }


}

export default useFirebase;