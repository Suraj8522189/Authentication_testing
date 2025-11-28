import { firebaseConfig } from "../../firebase";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";


export async function signup(mail)
{
  const actionCodeSettings={
    url:'http://localhost:3000/verify',
    handleCodeInApp: true,
  };

const auth = getAuth();
sendSignInLinkToEmail(auth, mail, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', mail);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

  

}











































// import { getAuth, fetchSignInMethodsForEmail, createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
// //   Check The duplicate Email !!

// export async function signup(mail,pass)
// { 
//  const auth = getAuth();

//   const signInMethods = await fetchSignInMethodsForEmail(auth, mail);
//     if (signInMethods.length >0) {
//      alert("Email already exists in Authentication !!");
//      return;  
//     } 
  

//       // Email Verification 
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, mail, pass);
//     const user = userCredential.user;

//     await sendEmailVerification(user);

//     alert("Verification Email Sent! Please verify your email.");
//     return;
    
//   } catch (error) {
//     console.log("Error:", error.message);
//     return;
//   }

// }

 