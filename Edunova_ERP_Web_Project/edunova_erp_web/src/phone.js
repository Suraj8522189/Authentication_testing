// import React from "react";
// import { getAuth, RecaptchaVerifier } from "firebase/auth";
// import { signInWithPhoneNumber } from "firebase/auth";



//  function Phone()
// {

//     function handleCode(){

// const auth = getAuth();
// window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
//   'size': 'invisible',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     onSignInSubmit();
//   }
// });

// const phoneNumber = getPhoneNumberFromUserInput();
// const appVerifier = window.recaptchaVerifier;

// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//     });
//     }


//  return(<>
//     <center>
//     <h1>
//     <input
//     placeholder="Enter Mobile Number"
//     type="number"

//     ></input>
//     <br></br>
//     <button>Send OTP</button>
//     </h1>
//     </center>
//     </>)
// }
// export default Phone;