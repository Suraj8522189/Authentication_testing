import React, { useState } from "react";
import { firebaseConfig } from "../../firebase";
import { collection, addDoc} from "firebase/firestore";      
import { db } from "../../firebase";
import { signup } from "./signupverifie";
function Input()    
{
    var [fname, setname]=useState("");
    var [mail, setmail]=useState("");
    var [contact, setcontact]=useState("");
    var [pass, setpass]=useState("");

   async function handleSign(){

        if (!fname || !mail || !contact || !pass) {
      alert("Please fill in both fields");
      return;
    }

    const rt = await signup(mail.trim());

     if (rt == 0 )
     {
      console.log("data not stored")

     }
     else{
      console.log("data stored ")

try{
  const docRef = await addDoc(collection(db, "users"), {                     //     Add The data in firebase Storage
    Fullname: fname,
    Contact:contact,
    Email: mail,
     Password: pass

  });
  console.log("Document written with ID: ", docRef.id);
}
 catch (e) {
  console.error("Error adding document: ", e);
}
     alert(`Login attempted with:\nFulname: ${fname} \nContact: ${contact} \nEmail: ${mail}\nPassword: ${pass}`);
}


     }
     
    return(<>
    <center>
    <h1>
        Welcome To Signup
        <br></br>
    <input 
    type="text" 
    placeholder="Full Name"
    value={fname}
    onChange={(e)=>setname(e.target.value)}>
    </input>
    <br></br>

    <input 
    type="email"
    placeholder="Email"
    value={mail}
    onChange={(e) => setmail(e.target.value)}>
    </input>
        <br></br>

    <input  
    type="Number" 
    placeholder="Contact"
    value={contact}
    onChange={(e) => setcontact(e.target.value)}>
    </input>
    <br></br>

    <input 
    type="password" 
    placeholder="Password"
    value={pass}
    onChange={(e) => setpass(e.target.value)}>
    </input>
        <br></br>
        <button onClick={handleSign}>Signup</button>
    </h1>
    </center>
    </>)
}
export default Input;