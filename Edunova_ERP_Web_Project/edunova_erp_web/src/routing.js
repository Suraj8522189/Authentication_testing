import "./routing.css"
import { Link,Route,Routes } from "react-router-dom";
import Home from "./modules/home/homes.js";
import Features from "./features/features";
import Service from "./service/service";
import Pricing from "./pricing/pricing";
import Contact from "./contact/contact";
import Input from "./modules/signup/input.js";
import Loginpage from "./modules/login/loginpage.js";
import Verify from "./modules/signup/verifie.js";
import Success from "./modules/signup/success.js";
import Phone from "./phone.js";

function Routers (){
    return(
<div >
<nav>
{/* <Link style ={{marginLeft:"200px"}}></Link> */}
<div className="backgroundcolor">
<div className="bighead">
<Link to="/" className="head">Home</Link>
<Link to="/features" className="head">Features</Link>
<Link to="/service"  className="head">Service</Link>
<Link to="/pricing"  className="head">Pricing</Link>
<Link to="/contact"  className="head">Contact</Link>
 <Link to="/login"  className="head">Log IN</Link>
<Link to="/signup"  className="head">Sign Up</Link> 
<Link to="/phone" className="head">Phone</Link>
</div>
</div>
</nav>

<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/features" element={<Features/>}></Route>
<Route path="/service" element={<Service/>}></Route>
<Route path="/pricing" element={<Pricing/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>
<Route path="/login" element={<Loginpage/>}></Route>
<Route path="/signup" element={<Input/>}></Route>
<Route path="/verify" element={<Verify/>}></Route>
<Route path="/success" element={<Success/>}></Route> 
<Route path="/phone" element={<Phone/>}></Route>


</Routes>

</div>


    )
}


export default Routers;