import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Footer1 from "../../Component/Footer1/Footer1";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import LowerHeader from "../../Component/Headers/LowerHeader/LowerHeader";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Store/actions/authen/authen";

export default function Login() {
  const { t, i18n } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);

  const togglePass = (e) => {
    e.preventDefault(); // Important! If you don't include this your page will refresh
    setShowPassword(!showPassword);
  };

  // login
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userErrors, setUserErrors] = useState({
    emailErr: null,
    passwordErr: null,
  });

  const handelFormChange = (e) => {
    // console.log(e.target.name, " :", e.target.value);
    switch (e.target.name) {
      case "email":
        setUser({
          ...user,
          email: e.target.value,
        });
        setUserErrors({
          ...userErrors,
          emailErr:
            e.target.value == 0
              ? "this field is required"
              : e.target.value < 10
              ? "Minimum email 10"
              : null,
        });
        break;
      case "password":
        setUser({
          ...user,
          password: e.target.value,
        });
        setUserErrors({
          ...userErrors,
          passwordErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
    }
  };

  const loginIn = (e) => {
    // e.preventDefault();
    // console.log("adduser", user);
    dispatch(login(user));
    setTimeout(function () {
      let userinfo = localStorage.getItem("user");
      if (!userinfo) {
        navigate("/login");
        alert("wrong email or password");
      } else {
        navigate("/");
      }
    }, 800);
    // let userinfo = localStorage.getItem("user");
    // if (!userinfo) {
    //   navigate("/login");
    //   alert("wrong email or password");
    // } else {
    //   navigate("/");
    // }
  };
  // End login

  return (
    <div className="login">
      <MiddeleHeader />
      <LowerHeader />
      <div className="container mb-5">
        <div className="row">
          <div className="col-6  px-4 ">
            <h4 className="text-center" style={{ color: "#f68b1e" }}>
              {t("Elogin")}
            </h4>
            <form className="mt-4">
              {/* input email */}
              <div className="col mb-4 border-muted  border-bottom  me-4">
                <input
                  className="form-control form-control-lg fs-6 border-0 shadow-none"
                  type="email"
                  name="email"
                  placeholder={t("Eemail")}
                  value={user.email}
                  onChange={handelFormChange}
                />
              </div>
              {/* input password */}
              <div className="col  mb-4 border-muted  border-bottom  me-4 d-flex justify-content-between">
                <input
                  className="form-control form-control-lg fs-6 border-0  shadow-none"
                  type={showPassword ? "text" : "password"}
                  placeholder={t("Epass")}
                  name="password"
                  value={user.password}
                  onChange={handelFormChange}
                />
                <span className="me-1 mt-3 " onClick={togglePass}>
                  <i class="fas fa-eye"></i>
                </span>
              </div>
            </form>
            <div></div>
            {/* remember me */}
            {/* <div className="form-check ">
              <input
                className="form-check-input  shadow-none"
                type="checkbox"
                defaultValue
                id="defaultCheck1"
              />
              <label className="form-check-label " htmlFor="defaultCheck1">
                {t("Eremember")}
              </label>
            </div> */}

            {/* buttons */}
            <div className="col10 -tac -pvl -mvl">
              {/* login button */}
              <div className="row py-4 col-rows-1">
                <button
                  className="btn btn-primary border border-none p-2 w-100 rounded  fs-5 fw-bold d-flex justify-content-between text-uppercase "
                  style={{ backgroundColor: "#f68b1e" }}
                  onClick={loginIn}
                >
                  <i className="loginBtn" class="fas fa-envelope mt-1 ms-1"></i>
                  <span>{t("Elogin")}</span>
                  <span></span>
                </button>
              </div>
              {/* Login With facebook */}
              <div className="row py-3 col-rows-1">
                <button
                  className="btn btn-primary border border-none p-2 w-100 rounded  fs-5  fw-bold m d-flex justify-content-between text-uppercase w-100"
                  style={{ backgroundColor: "#344f88" }}
                >
                  <i
                    className="loginBtn"
                    class="fab fa-facebook-square mt-1 ms-1"
                  />
                  <span> {t("Elogface")}</span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-6 px-4">
            <h4 className="mb-2 text-center" style={{ color: "#f68b1e" }}>
              {t("Ecreate")}
            </h4>
            <p className="mb-5 mt-4 pt-3 ">{t("Exx")}</p>
            {/* create button */}
            <div className="col10 -tac -pvl -mvl  ">
              <div className="row py-4 col-rows-1  ">
                <Link to="/registration" className=" mt-4 ">
                  <button
                    className="btn btn-primary border border-none p-2 w-100 rounded  fs-5 fw-bold"
                    style={{ backgroundColor: "#f68b1e" }}
                  >
                    <span className="d-flex justify-content-between text-uppercase">
                      <i className="loginBtn" class="fas fa-envelope mt-1"></i>
                      <span> {t("Ecema")} </span>
                      <span></span>
                    </span>
                  </button>
                </Link>
              </div>
              <div className="row py-3 col-rows-1">
                <div className="col-12">
                  <button
                    className="btn btn-primary border border-none p-2 w-100 rounded  fs-5  fw-bold m"
                    style={{ backgroundColor: "#344f88" }}
                  >
                    <span className="d-flex justify-content-between text-uppercase">
                      <i
                        className="loginBtn"
                        class="fab fa-facebook-square mt-1"
                      />
                      <span>{t("Erig")}</span>
                      <span></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}
