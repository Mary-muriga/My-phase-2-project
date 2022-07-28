import React from "react";
import { useState } from "react";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return(
    <div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} />
        <input type="text" value={lastName} />
        <button tye="submit">Submit</button>
      </form>
    </div>
  );
}
export default Login;
