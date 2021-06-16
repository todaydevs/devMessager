import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  
  return (
    <div className="be-join-container">
     <div className="be-join">
      <h1 className="be-h1"> Join a room</h1>
       <div><input className="be-input" placeholder="Your name" type="text" onChange={(e) => setName(e.target.value)} /></div>
       <div><input className="be-input be-mt-20" placeholder="Room" type="text" onChange={(e) => setRoom(e.target.value)}/></div>
       <Link to={`/chat`}>
         <button className="be-btn be-mt-20" type="submit">Sign in</button>
       </Link>
       <p className="be-p">Proudly Developed by Todaysdevs Developers</p>
     </div>
    </div>
    )
}

export default Join;
