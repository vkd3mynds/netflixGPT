// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDluYN7Qv_wZCi1SvtsfaNTJojbvai249Y",
//   authDomain: "netflixgpt-f7f0b.firebaseapp.com",
//   projectId: "netflixgpt-f7f0b",
//   storageBucket: "netflixgpt-f7f0b.appspot.com",
//   messagingSenderId: "550134002407",
//   appId: "1:550134002407:web:5b2872c7ba8a40157ce842",
//   measurementId: "G-6N29M87WEK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth()



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDluYN7Qv_wZCi1SvtsfaNTJojbvai249Y",
  authDomain: "netflixgpt-f7f0b.firebaseapp.com",
  projectId: "netflixgpt-f7f0b",
  storageBucket: "netflixgpt-f7f0b.appspot.com",
  messagingSenderId: "550134002407",
  appId: "1:550134002407:web:5b2872c7ba8a40157ce842",
  measurementId: "G-6N29M87WEK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
