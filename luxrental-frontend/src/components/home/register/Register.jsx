import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getProfile, setProfile } from "../../../utils/user";
import "./register.css";
import axios from "axios";
import { useQuery } from "react-query";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    getProfile("user") && history.push("/");
  });

  //Local
  // const url = "http://localhost:4000/users/register";
  //Server
  const url = "http://34.168.126.142/users/register";

  const registerRequest = async () => {
    return await axios.post(url, {
      firstName,
      lastName,
      username,
      password,
    });
  };

  const onSuccess = (data) => {
    history.push("/login");
  };
  const onError = (error) => {
    alert(error.response.data.message);
  };

  // const { isLoading, isError, error, data, isFetching, refetch } = useQuery(
  const { refetch } = useQuery("login", registerRequest, {
    enabled: false,
    onError,
    onSuccess,
  });

  const register = () => {
    // validate login
    if (!firstName) {
      alert("First Name Required");
    }
    if (!lastName) {
      alert("Last Name Required");
    }
    if (!username) {
      alert("User Name Required");
    }
    if (!password) {
      alert("Password Required");
    }
    refetch();
  };

  return (
    <div className="register">
      <form className="registerForm">
        <span className="registerTitle">Sing Up</span>
        <label>First Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label>Last Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your last  name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="registerButton"
          onClick={(e) => {
            e.preventDefault();
            register();
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
