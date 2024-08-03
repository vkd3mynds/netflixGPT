import React, { useRef, useState } from 'react'
import Header from './Header'
import { BG,USER_AVATAR } from '../utils/Constrants'
import { checkValidateData } from '../utils/Validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from 'firebase/auth'
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'


const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null)
  
  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm)
  }
  const handleButtonClick= ()=>{
    // console.log(email.current.value)
    // console.log(password.current.value)

    const logMessage = checkValidateData(email.current.value,password.current.value)
    console.log(logMessage)
    setErrorMessage(logMessage)
    if(logMessage) return;

    if(!isSignInForm){
      // SIGN IN LOGIC
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value ,
      photoURL: USER_AVATAR
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
    
      navigate('/browse')
      // ...
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.errorMessage)
      // ...
    });
    console.log(user)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate('/browse')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      });
    }
  }
  return (
    <>
      <Header />
      <div className="absolute">
        <img src={BG} alt="login-bg" className="h-screen object-cover" />
      </div>
      <div className="w-3/12 absolute bg-black opacity-80 z-10 mx-auto my-24 left-0 right-0 p-12">
        <form onSubmit={(e)=>e.preventDefault()}>
          <h1 className="text-white text-3xl py-4 font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Enter Your Name"
              className="p-2 my-2 w-full bg-gray-700 text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-full bg-gray-700 text-white"
          />
          {/* <p className='text-red-500 py-2'>{errorMessage}</p> */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-700 text-white"
          />
          <p className='text-red-600 py-2'>{errorMessage}</p>
          <button className="p-4 my-4 bg-red-700 w-full rounded-lg text-white" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? " New to Netflix? Sign up now." : "Proceed Sign In"}
           
          </p>
        </form>
      </div>
    </>
  );
}

export default Login