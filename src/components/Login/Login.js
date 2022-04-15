import React from "react";

const Login = () => {
  return (
    <div className="w-[40%] mx-auto">
      <div class="form-control">
        <label class="input-group input-group-vertical mb-5">
          <span>Your Email</span>
          <input
            required
            type="email"
            placeholder="email"
            class="input input-bordered"
          />
        </label>
        <label class="input-group input-group-vertical mb-5">
          <span>Your Password</span>
          <input
            required
            type="password"
            placeholder="Password"
            class="input input-bordered"
          />
        </label>
        <button className="btn bg-[#F91944]">Login</button>
      </div>
    </div>
  );
};

export default Login;
