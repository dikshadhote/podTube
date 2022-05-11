import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/reducers/auth/authSlice";

export default function Signup() {
  const [signIn, setSignin] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const navigateTo = useNavigate();
  const signupDispatch = useDispatch();
  const signUpHandler = async () => {
    await signupDispatch(signUp(signIn)).unwrap();
    navigateTo("/login", { replace: true });
  };

  return (
    <div className="d-flex flex-justify-center align-items-center">
      <div className="card nav-yellow-shadow  login-container flex-column">
        <div className="d-flex flex-justify-center">
          <h3 className="white-text-color">Signup</h3>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signUpHandler();
          }}
        >
          <div className=" mt-2 ml-1 d-flex flex-column">
            <label htmlFor="input-fname" className="ml-2 white-text-color">
              First Name
            </label>
            <input
              className="input input-login black-light-shade-bg  white-text-color"
              id="input-fname"
              placeholder="Loreum"
              onChange={(e) => {
                let timer = setTimeout(() => {
                  setSignin({ ...signIn, firstName: e.target.value });
                  clearTimeout(timer);
                }, 1000);
              }}
            />
          </div>
          <div className=" mt-2 ml-1 d-flex flex-column">
            <label htmlFor="input-lname" className="ml-2 white-text-color">
              Last Name
            </label>
            <input
              className="input input-login black-light-shade-bg  white-text-color"
              id="input-lname"
              placeholder="Ipsum"
              onChange={(e) => {
                let timer = setTimeout(() => {
                  setSignin({ ...signIn, lastName: e.target.value });
                  clearTimeout(timer);
                }, 1000);
              }}
            />
          </div>
          <div className=" mt-2 ml-1 d-flex flex-column">
            <label htmlFor="input-email" className="ml-2 white-text-color">
              Email
            </label>
            <input
              className="input input-login black-light-shade-bg  white-text-color"
              id="input-email"
              placeholder="you@dreamstore.com"
              type="email"
              onChange={(e) => {
                let timer = setTimeout(() => {
                  setSignin({ ...signIn, email: e.target.value });
                  clearTimeout(timer);
                }, 1000);
              }}
            />
          </div>
          <div className=" mt-2 ml-1 d-flex flex-column">
            <label htmlFor="input-password" className="ml-2 white-text-color">
              Password
            </label>
            <input
              className="input input-login black-light-shade-bg  white-text-color"
              id="input-password"
              placeholder="*******"
              type="password"
              onChange={(e) => {
                let timer = setTimeout(() => {
                  setSignin({ ...signIn, password: e.target.value });
                  clearTimeout(timer);
                }, 1000);
              }}
            />
          </div>

          <button
            type="submit"
            className="btn orange-bg login-button ml-3 font-weight-bold"
          >
            Create New Account
          </button>
          <div className="d-flex flex-justify-center align-items-center">
            <Link
              className="white-text-color d-flex flex-justify-center align-items-center  ml-3 login-button"
              to="/login"
            >
              Already have an account
              <span className="material-icons pl-1 fs-small white-text-color">
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
