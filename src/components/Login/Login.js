import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="md:w-[40%] px-5 mx-auto mt-10 login-back py-5">
      <div className="form-control">
        <label className="input-group input-group-vertical mb-5">
          {/* <span>Your Email</span> */}
          <input
            required
            type="email"
            placeholder="Email"
            className="input input-bordered"
          />
        </label>
        <label className="input-group input-group-vertical mb-5">
          {/* <span>Your Password</span> */}
          <input
            required
            type="password"
            placeholder="Password"
            className="input input-bordered"
          />
        </label>
        <button className="btn bg-[#F91944]">Sign In</button>
        <div className="flex mt-2 mx-auto">
          <p className="text-[#FF6464] font-bold mr-2">New to RED ONION?</p>
          <Link to="/signUp">Sign Up</Link>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <h1 className=" h-1 bg-black w-1/2">
          <hr />
        </h1>
        <p className="px-2">OR</p>
        <h1 className=" h-1 bg-black w-1/2">
          <hr />
        </h1>
      </div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          Google{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
