import React from "react";
import  data from "./data";
import { data1 } from "./data";
import MyLink from "./mylinkcomponent";
import { Outlet } from "react-router-dom";


function AdminPanel() 
{

  var links = data.map( (a)=> <MyLink design ={"link"} link={a[0]}   text={a[1]}></MyLink>  
  )
  var links1 = data1.map( (b)=> <MyLink design ={"link1"}  link={b[0]}   text={b[1]}></MyLink> )


 

return (
  <div className="admin-layout">

    {/* Sidebar */}
    <aside className="admin-sidebar">
      <h2 className="admin-title">Admin Panel</h2>

      <nav className="sidebar-links">
        {links}
      </nav>
    </aside>

    {/* Main Content */}
    <main className="admin-content">
      <div className="welcome-card">
        <h1 className="welcome-title">⚜️ Welcome Admin ⚜️</h1>
        <p className="welcome-text">
          Manage users, settings and dashboard activities from here.
        </p>

        <div className="stats">
          {links1}
        </div>
      </div>
    </main>

  </div>
);



}

export default AdminPanel;
