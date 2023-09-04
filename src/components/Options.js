import React from "react";
import { Link } from "react-router-dom";
const Options = () => {
  return (
    <section className="bg-blue-950 fixed inset-0 flex flex-col justify-center items-center w-full h-full">
      <h1 className="text-white text-[40px]">
        Choose One of the available options
      </h1>
      <div className="flex justify-center items-center">
        <button className="rounded-xl p-3 text-yellow-950 bg-orange-300 m-10">
          <Link to="/jwt/register">JWT Auth</Link>
        </button>
        <button className="rounded-xl p-3 text-yellow-950 bg-orange-300 m-10">
          <Link to="/oauth/register">OAuth 2.0</Link>
        </button>
      </div>
    </section>
  );
};

export default Options;
