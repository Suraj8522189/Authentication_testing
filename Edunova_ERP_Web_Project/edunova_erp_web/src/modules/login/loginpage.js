import { useState } from "react";
import React from "react";
import { firebaseConfig } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";



function Loginpage()
{
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async() => {

    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }

try {
  const checkmail = await signInWithEmailAndPassword(
    auth,
    email.trim(),
    password
  );

  const users = checkmail.user;
  alert("Login Successful!");
  console.log(users.email);
     setTimeout(() => navigate("/AdminPanal"), 1500);


} catch (error) {

  if (error.code === "auth/user-not-found") {
    alert("Please signup first!");
  } 
  else if (error.code === "auth/wrong-password") {
    alert("Wrong password!");
  } 
  else {
    alert(error.message);
  }
}
}

    return(<>
     
        <center>
               <h1>
             Welcome To Login
             <br></br>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
     <br></br>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <br></br>
        <button
          onClick={handleLogin}
        >
          Login
        </button>
         </h1>
    </center>
   
    </>)
}
export default Loginpage;