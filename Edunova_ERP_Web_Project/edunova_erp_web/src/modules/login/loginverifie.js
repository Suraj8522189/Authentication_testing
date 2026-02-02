import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";



export async function loginverifei(email,password,navigate){

try {
      const result = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password.trim()
      );

      const user = result.user;
      console.log("Logged in:", user.email);

      alert("Login Successful!");
      navigate("/AdminPanal");

    } catch (error) {
      console.log(error.code);

      if (error.code === "auth/user-not-found") {
        alert("User not found, please signup first");
      } 
      else if (error.code === "auth/wrong-password") {
        alert("Wrong password");
      } 
      else if (error.code === "auth/invalid-email") {
        alert("Invalid email format");
      }
      else {
        alert(error.message);
      }
    }
        
}