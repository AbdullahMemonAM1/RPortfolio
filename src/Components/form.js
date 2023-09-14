

import React from 'react';
import "./formStyles.css";
const form = () => {
  return (
    <div className="form1">
        <label >Your Name</label>
        <input type="text" ></input>
        <label >Email</label>
        <input type="email" ></input>
        <label >Subject</label>
        <input type="text" ></input>
        <label >Message</label>s
        <textarea rows="6" placeholder="Type Your Message here"/>
        <button className="btn">Submit</button>
     </div>
  )
}

export default form
