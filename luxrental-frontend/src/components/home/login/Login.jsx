import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import "./login.css";
import { getProfile, setProfile } from "../../../utils/user";
import { useHistory } from "react-router-dom";

export default function Login({ setUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    getProfile("user") && history.push("/");
  });

  //Local
  // const url = "http://localhost:4000/users/authenticate";
  //Server
  const url = "http://34.168.126.142/users/authenticate";

  const loginRequest = async (data) => {
    return await axios.post(url, {
      username: data.userName,
      password: data.password,
    });
  };

  const onSuccess = (data) => {
    setProfile(data.data);
    setUser(getProfile());
    history.push("/");
  };
  const onError = (error) => {
    alert(error.response.data.message);
  };

  const mutation = useMutation(loginRequest, {
    onError,
    onSuccess,
  });

  const login = () => {
    // validate login
    if (!userName) {
      alert("User Name Required");
    }
    if (!password) {
      alert("Password Required");
    }
    mutation.mutate({ userName, password });
  };

  return (
    <div className="login">
      <form className="loginForm">
        <span className="loginTitle">Sign In</span>
        <label>User Name</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Your User Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="loginButton"
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}