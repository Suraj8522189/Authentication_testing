import { useState } from "react";
import React from "react";
// import { firebaseConfig } from "../../firebase";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



function Loginpage()
{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = () => {

    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }

//  const auth = getAuth();
// try{
//       const checkemail=  signInWithEmailAndPassword(auth, email, password);
//       if (checkemail===checkemail){
//         alert("success!")
//       }
//       else(checkemail!=checkemail)
//       {
//         alert("!!Please signup the page!!")
//         return;
//       }
  
//   }
//   catch(error) {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   }
  
    alert(`Login attempted with:\nEmail: ${email}\nPassword: ${password}`);  
  };

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