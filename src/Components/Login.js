import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [showSignIn, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setSignInForm(!showSignIn);
  };
  const handleButtonClick = (e) => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      fullName.current?.value,
      showSignIn
    );
    setErrorMessage(message);
    if (message) return;
    if (!showSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: fullName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ Uid: uid, Email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("sign In log", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-8 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {showSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!showSignIn && (
          <input
            type="text"
            ref={fullName}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}

        <input
          type="text"
          ref={email}
          placeholder="Email or Mobile Number"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full"
          onClick={handleButtonClick}
        >
          {showSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={toggleSignInForm}>
          {showSignIn
            ? "New to Netflix? Sign up now."
            : "Already Registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
