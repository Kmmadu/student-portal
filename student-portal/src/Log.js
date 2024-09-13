import React, { useState } from "react";
import { Link, Routes, Route } from 'react-router-dom';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Log() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="App">
      {isRegistered ? <SignIn /> : <SignUp />}
      <button onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? "Switch to Register" : "Switch to Login"}
      </button>

      <p>
        {isRegistered ? (
          <Link to="/signup">Don't have an account? Sign up here</Link>
        ) : (
          <Link to="/signin">Already have an account? Log in here</Link>
        )}
      </p>

         {/* Define Routes */}
         <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default Log;
