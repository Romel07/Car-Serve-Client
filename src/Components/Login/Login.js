import React, { useContext, useState } from 'react';
import './Login.css'
import Navbar from '../Home/Navbar/Navbar'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';



const Login = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
    const [loggedInUser, setLoggedInUser] = useContext(userContext)


    const [signInUser, setSignInUser] = useState({})

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {


        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        else {
            firebase.auth()
                .signInWithPopup(provider)
                .then((result) => {
                    var credential = result.credential;
                    var token = credential.accessToken;
                    var user = result.user;
                    setSignInUser(user)
                    setLoggedInUser(user)
                    history.replace(from);
                    // console.log(loggedInUser.email);  

                }).catch((error) => {  
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    var email = error.email;
                    var credential = error.credential;
                    console.log(errorCode, errorMessage, email);
                });
        }

    }
    return (
        <div>
            <Navbar ></Navbar>

            <div className='background text-center mt-5 pt-5 mb-3'>
                <h2>Login With </h2>

                <button onClick={handleGoogleSignIn} style={{ width: '20em', borderRadius: '8px', textAlign: 'center' }} className='text-center my-3'>
                    <FontAwesomeIcon style={{ color: '#3cba54', marginRight: '1em' }} icon={faGoogle} />
            Continue With Google
            </button>
                <h6>Don't have an account? Connect With Google.</h6>
            </div>
        </div>
    );
};

export default Login;