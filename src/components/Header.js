import React, { useEffect } from 'react'
import { LOGO } from '../utils/Constrants'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser,removeUser } from '../utils/userSlice';
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      // navigate("/")
    }).catch((error)=>{
      navigate('/error')
    })
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user.uid;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    });
  },[])
  return (
    <>
      <div className=" z-10 py-2 bg-gradient-to-b from-black absolute w-full">
        <div className="flex p-2 justify-between">
          <div>
            <img src={LOGO} alt="logo" className="w-44" />
          </div>

          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      </div>
    </>
  );
}

export default Header