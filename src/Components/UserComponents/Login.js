import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { login } from "../../redux/actions/loginaction";

import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logininfo = useSelector((state) => state.loginReducer.logininfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    const res = await axios.post(`/login`, data).then((res) => {
      if (res.data.data.status === 200) {
        const info = res.data;
        localStorage.setItem("auth-token", info.data.token);
        localStorage.setItem("user-email", info.data.user.email);
        // localStorage.setItem("rest_id", info.data.user.restaurant_id);
        localStorage.setItem("user-type", info.data.user.user_type);
        dispatch(login(info.data));
        navigate("/home");
      } else {
        console.log(res.data.data.message);
      }
    });
  };

  return (
    <>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <Link
                      to=""
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">Wegsoft</span>
                    </Link>
                  </div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Login to Your Account
                        </h5>
                      </div>

                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Email
                          </label>
                          <div className="input-group has-validation">
                            <input
                              type="email"
                              name="email"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              className="form-control"
                              placeholder="Enter Your Email"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your Email.
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="form-control"
                            placeholder="Enter Your Password"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                            onClick={(e) => loginSubmit(e)}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Link
        to=""
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
    </>
  );
}

export default Login;
