import React from "react";
import  data from "./data";
import { data1 } from "./data";
import MyLink from "./mylinkcomponent";
import { Outlet } from "react-router-dom";


function AdminPanel() 
{

  var links = data.map( (a)=> <MyLink design ={"link"} link={a[0]}   text={a[1]}></MyLink>  
  )
    var links = data1.map( (a)=> <MyLink design ={"link"} link={a[0]}   text={a[1]}></MyLink>  )


 

  return (<>
  
  <div className="container1">
    <div className="container">
      <div className="sidebar">
        <h2 className="title">Admin Panel</h2>
        {links}
    
      </div>
    <Outlet/>


      
    </div> 
    </div>

   
 </> );
}

export default AdminPanel;
