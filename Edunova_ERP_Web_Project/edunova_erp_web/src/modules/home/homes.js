import React from "react";
import "./homes.css"
import homepage from "../images/homepage.jpg"
// import Getstart from "../components/getstartbtn";




function Home(){
return(
<>
<div className="bigg">
<img  src={homepage} className="image"></img>
<div className="midd">
    <div className="smalll">
<h3 className="mainhead"> Simplify School Management with a Unified ERP Platform </h3>

<h4 className="subhead">One Integrated Dashboard for Admins,Trainers,Streamline Operation,Ehance Learning Outcomes</h4>
{/* <Getstart className="getbtn"></Getstart> */}

</div>
</div>
</div>




</>


)

}

export default Home