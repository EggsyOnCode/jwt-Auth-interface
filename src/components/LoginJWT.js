import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
const LoginJWT = () => {
  const { username, setUsername, setSelectedOption } = useContext(LoginContext);
  const [pwd, setPwd] = useState("");
  const history = useNavigate();

  const storeUsername = (e) => {
    setUsername(e.target.value);
  };

  const storePwd = (e) => {
    setPwd(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: pwd,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/users/login",
        data
      );
      if (response.data.success) {
        // Registration was successful
        console.log("Registration successful:", response.data.user);
        setSelectedOption(response.data.user.role);
        history("/protected");
        // You can do something here, like redirect to a success page or show a success message.
      } else {
        // Registration failed
        console.error("Registration failed:", response.data.msg);
        // You can display an error message to the user.
      }
    } catch (err) {
      console.log(new Error(err));
    }
  };
  return (
    <section className="bg-blue-950 fixed inset-0 flex flex-col justify-center items-center w-full h-full">
      <h1 className="text-white text-[40px]">Sign In</h1>
      <form className="text-white">
        <label htmlFor="username">Username: </label>
        <br />
        <input
          id="username"
          type="text"
          className="m-3 rounded-xl text-black p-3"
          onChange={storeUsername}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <br />
        <input
          id="password"
          type="password"
          className="m-3 rounded-xl text-black p-3"
          onChange={storePwd}
        />
        <br />
        <button
          className="bg-yellow-600 text-yellow-950 p-3 rounded-xl"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default LoginJWT;
