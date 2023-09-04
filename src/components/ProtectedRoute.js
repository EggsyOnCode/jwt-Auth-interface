import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Swal from "sweetalert2";
import axios from "axios";

const ProtectedRoute = () => {
  const { username, selectedOption } = useContext(LoginContext);

  const serveAll = async () => {
    const data = {
      username: username,
      role: selectedOption,
    };
    console.log(data);
    // const tokenRes = await axios.get("http://localhost:5000/users/userToken", {
    //   username: username,
    // });
    // const token = tokenRes.token;
    const instance = axios.create({ withCredentials: true });
    const response = await instance.get(
      "http://localhost:5000/users/checkRole",
      { params: data }
    );
    if (response.data.success) {
      Swal.fire(`You are an/a {selectedOption} officially!`);
    } else {
      Swal.fire("You are not who you claim to be!");
    }
  };

  return (
    <section className="protected-routes bg-blue-950 fixed inset-0 flex flex-col justify-center items-center w-full h-full overflow-y-scroll">
      <h1 className="text-white text-[40px]">
        Welcome {username} <br />
        You are a {selectedOption} <br />
        Protected Routes
      </h1>
      <div className="w-1/2 h-1/4 bg-red-400 rounded-lg p-3 m-3 flex flex-col justify-center items-center">
        <h1 className="text-[40px] text-black">For Admins</h1>
        <button
          className="p-3 mt-2 bg-yellow-400 text-black rounded-xl"
          onClick={serveAll}
        >
          Open
        </button>
      </div>
      <div className="w-1/2 h-1/4 bg-red-400 rounded-lg p-3 m-3 flex flex-col justify-center items-center">
        <h1 className="text-[40px] text-black">For Editors</h1>
        <button
          className="p-3 mt-2 bg-yellow-400 text-black rounded-xl"
          onClick={serveAll}
        >
          Open
        </button>
      </div>
      <div className="w-1/2 h-1/4 bg-red-400 rounded-lg p-3 m-3 flex flex-col justify-center items-center">
        <h1 className="text-[40px] text-black">For Users</h1>
        <button
          className="p-3 mt-2 bg-yellow-400 text-black rounded-xl"
          onClick={serveAll}
        >
          Open
        </button>
      </div>
    </section>
  );
};

export default ProtectedRoute;
