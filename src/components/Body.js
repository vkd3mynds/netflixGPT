import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import About from "./About";
import { onAuthStateChanged  } from 'firebase/auth'
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/about",
      element: <About />
    }
  ]);

  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName, photoURL } = user.uid;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           email: email,
  //           displayName: displayName,
  //           photoURL: photoURL,
  //         })
  //       );
  //       // navigate('/browse')
  //     } else {
  //       // User is signed out
  //       dispatch(removeUser());
  //       // navigate('/')
  //     }
  //   });
  // },[])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
