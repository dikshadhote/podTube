import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/reducers/auth/authSlice";
export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigateTo = useNavigate();
  const guestCredential = {
    email: "dikshadhote@podtube.com",
    password: "diksha@123",
  };

  const loginDispatch = useDispatch();
  const loginHandler = async () => {
    await loginDispatch(logIn(guestCredential)).unwrap();
    navigateTo("/", { replace: true });
  };

  return (
    <div>
      <div className="d-flex flex-justify-center align-items-center  mb-2">
        <div className="card nav-yellow-shadow  login-container  black-dark-bg flex-column">
          <div className="d-flex flex-justify-center  ">
            <h3 className="white-text-color">Login</h3>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginHandler();
            }}
          >
            <div className=" mt-2 ml-1 d-flex flex-column">
              <label htmlFor="input-email" className="ml-2  white-text-color">
                Email
              </label>
              <input
                className="input input-login black-light-shade-bg white-text-color "
                id="input-email"
                placeholder="dikshadhote@podtube.com"
                type="email"
                value="dikshadhote@podtube.com"
                onChange={(e) => {
                  let timer = setTimeout(() => {
                    setLogin({ ...login, email: e.target.value });
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
                className="input input-login black-light-shade-bg white-text-color"
                id="input-password"
                placeholder="*******"
                type="password"
                value="diksha@123"
                onChange={(e) => {
                  let timer = setTimeout(() => {
                    setLogin({ ...login, password: e.target.value });
                    clearTimeout(timer);
                  }, 1000);
                }}
              />
            </div>
            <button
              type="submit"
              className="btn blue-bg-sec login-button ml-3 font-weight-bold"
            >
              Login
            </button>
            <button
              type="submit"
              className="btn blue-bg-sec login-button ml-3 font-weight-bold"
            >
              Guest login
            </button>
          </form>
          <div className="d-flex flex-justify-center align-items-center">
            <Link
              className="white-text-color d-flex flex-justify-center align-items-center"
              to="/signup"
            >
              create new account
              <span className="material-icons pl-1 fs-small white-text-color">
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
