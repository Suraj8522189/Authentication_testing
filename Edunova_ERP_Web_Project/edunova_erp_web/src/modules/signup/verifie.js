import React from "react";
import { useState } from "react";
import {getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Verify()
{
  const navigate = useNavigate();

  const [message, setMessage] = useState("Verifying your email...");
 const auth=getAuth()
if (isSignInWithEmailLink(auth, window.location.href)) {

  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {

    email = window.prompt('Please provide your email for confirmation');
  }
  signInWithEmailLink(auth, email, window.location.href)
    .then(() => {
      window.localStorage.removeItem('emailForSignIn');
      
          setMessage("🎉 Email verified successfully!");
          setTimeout(() => navigate("/success"), 1500);
     
    })
    .catch((error) => {
         console.log(error);
          setMessage("❌ Invalid or expired link.");
    });
}
return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>{message}</h2>
    </div>
  );
  
}
export default Verify; 


