/* eslint-disable no-unreachable */
import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { nav } from "../../data/Data";
import { clearProfile } from "../../../utils/user";

const Header = ({ user }) => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
          <Link to="/">
            <img src="./images/logo.png" alt="" />
            </Link>
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i className="fas fa-bell"></i>
            {user && (
              <>
                <i className="fas fa-user"></i>
                <> {user.username}</>
              </>
            )}
          </div>
          <div className="button flex">
            {user ? (
              <button
                className="btn1"
                onClick={(e) => {
                  e.preventDefault();
                  clearProfile();
                  window.location.reload(true);
                }}
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn1">Sign In</button>
                </Link>
                <Link to="/register">
                  <button className="btn7">Sign Up</button>
                </Link>
              </>
            )}
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;