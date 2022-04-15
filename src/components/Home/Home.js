import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-[#FCF4E0]">
      <div className="banner ">
        <div className="md:flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl text-center">
            Best food waiting for your belly
          </h1>
          <div className=" mx-auto">
            <div className="md:flex">
              <input
                type="text"
                placeholder="Search food items"
                className=" rounded-full input input-bordered input-error w-full max-w-xs"
              />
              <button className=" rounded-full btn bg-[#F91944] border-0">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
