import React, { useState } from "react";


export default function Pincode()
{

    var[code,setcode]=useState("");

     function country() 
     {
      var name=document.getElementById("num").value;
      var url = "https://api.zippopotam.us/in/"+name;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log("Data from API:", data);
         
          } else {
            console.error("Error fetching data:", xhr.status);
          }
        }
      };

      xhr.send();
    }

    return(<>
    <input
    placeholder="Enter Pin Code"
    type="text"
    id="num"
    value={code}
    onChange={(e)=> setcode(e.target.value)}
    ></input>
    <br></br>
    <button onClick={country}>Check Now</button>
    
</>)
}
