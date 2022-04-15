import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, firebaseError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // if (password !== ConfirmPassword) {
  //   setError("password not matched");
  // }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="md:w-[40%] px-5 mx-auto mt-10 login-back py-5"
      >
        <div className="form-control">
          <label className="input-group input-group-vertical mb-5">
            {/* <span>Your Email</span> */}
            <input
              onChange={handleNameChange}
              required
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </label>
          <label className="input-group input-group-vertical mb-5">
            {/* <span>Your Password</span> */}
            <input
              onChange={handleEmailChange}
              required
              type="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </label>
          <label className="input-group input-group-vertical mb-5">
            {/* <span>Your Password</span> */}
            <input
              onChange={handlePassChange}
              required
              type="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </label>

          <label className="input-group input-group-vertical mb-5">
            {/* <span>Your Password</span> */}
            <input
              onChange={handleConfirmPassChange}
              required
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered"
            />
          </label>
          <button type="submit" className="btn bg-[#F91944]">
            Sign Up
          </button>
          <div className="flex mt-2 mx-auto">
            <p className="text-[#FF6464] font-bold mr-2">
              Already have an Account?
            </p>
            <Link to="/login">Login</Link>
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
      </form>
    </div>
  );
};

export default SignUp;
