import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { login } from "../redux/actions/loginaction";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logininfo = useSelector((state) => state.loginReducer.logininfo);
  // console.log(logininfo)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();

    const data = {
       email,
       password,
    };

    const res = await axios.post(`/login`, data).then(res => {

      if(res.data.data.status === 200){
        const info = res.data;
        localStorage.setItem("auth-token", info.data.token);
        localStorage.setItem("user-email", info.data.user.email);
        localStorage.setItem("rest_id", info.data.user.restaurant_id);
        dispatch(login(info.data));
        navigate('/home');
        return toast.success("Logged In", { type: "success" });
      }else{
        console.log(res.data.data.message)
      }
      
    })
    // const info = res.data;
  
      // console.log(res.data.data.status);

   
    

    // await axios.post(`/api/login`, data).then(res => {
    //       // if(response.data.status === 200){
    //         const info = res.data;
    //         localStorage.setItem("auth-token", info.data.token);
    //         localStorage.setItem('user-email', info.data.user.email);
    //         dispatch(login(info.data));
    //         // console.log(info.data);
    //         navigate('/home');
    //       // }
    //   }).catch((err) => {
    //     console.log("Err", err);
    //   });
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
                        {/* <p className="text-center small">Enter your username & password to login</p> */}
                      </div>

                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Email
                          </label>
                          <div className="input-group has-validation">
                            {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
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

                        {/* <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="remember"
                              value="true"
                              id="rememberMe"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rememberMe"
                            >
                              Remember me
                            </label>
                          </div>
                        </div> */}
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                            onClick={(e) => loginSubmit(e)}
                          >
                            Login
                          </button>
                        </div>
                        {/* <div className="col-12">
                      <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                    </div> */}
                      </form>
                    </div>
                  </div>

                  {/* <div className="credits">
                 
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div> */}
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
