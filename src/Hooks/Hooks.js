import React, { useState } from "react";
/* import "./styles.css"; */

const formStyle={
   
   margin: '10vh auto'
}


function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

return (
    <form style={formStyle} >
      <p>
      <input
      
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      /> 
     </p>
     <p>
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      </p>
      <p>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      </p>
      <p>
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
     </p>
<button type="submit">Submit</button>
    </form>
  );
}

export default Form;