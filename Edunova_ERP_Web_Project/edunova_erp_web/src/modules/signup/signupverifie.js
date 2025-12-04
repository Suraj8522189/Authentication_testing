import { fetchSignInMethodsForEmail, getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../../firebase";

export async function signup(mail)
{
  const auth = getAuth();
  alert("Running")
  console.log("Email:",mail)
  if(!mail){
    alert("Email is empty!!")
  }
    const signInMethods = await fetchSignInMethodsForEmail(auth, mail.trim());
    console.log("Method:",signInMethods);
    alert("Length=",+signInMethods.length)
    console.log("Method:",signInMethods);
      if (signInMethods.length > 0) {
       alert("Email already exists in Authentication !!");
       return; 
      } 

  const actionCodeSettings={
    url:'http://localhost:3000/verify',
    handleCodeInApp: true,
  };

sendSignInLinkToEmail(auth, mail, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', mail);
    alert("Verification Link Sent. Please Check Your Email")
        alert(" First Go to Gmail and verify your email Then login!!")

  })
  .catch((error) => {
    alert (error.message);
    // ...
  }); 

}

