import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Footer2 from "../Footer2/Footer2";
import LowerHeader from "../Headers/LowerHeader/LowerHeader";
import MiddeleHeader from "../Headers/MiddleHeader/MiddeleHeader";
import ImageContainer from "../ImageContainer/ImageContainer";
import { getSingleUser } from "../../Store/actions/UserActions/getSingleUser";
import { updatePassword } from "../../Store/actions/UserActions/updatePassword";
import { useTranslation } from "react-i18next";

export default function UpdatePassword() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = JSON.parse(localStorage.getItem("user")).userId;
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  // const userinfo = useSelector((state) => state.users);
  // console.log("userrrrrrrrrrrrrrrrr", userinfo);
  const [user, setUser] = useState({
    // name: userinfo.name,
    // email: userinfo.email,
    oldPassword: "",
    newPassword: "",
  });
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [userErrors, setUserErrors] = useState({
    oldPasswordErr: null,
    newPasswordErr: null,
  });

  const togglePass1 = (e) => {
    e.preventDefault(); // Important! If you don't include this your page will refresh
    setShowPassword1(!showPassword1);
  };
  const togglePass2 = (e) => {
    e.preventDefault(); // Important! If you don't include this your page will refresh
    setShowPassword2(!showPassword2);
  };
  const handelFormChange = (e) => {
    // console.log(e.target.name, " :", e.target.value);
    // console.log("Userrrrr", " :", user);
    switch (e.target.name) {
      case "oldPassword":
        setUser({
          ...user,
          oldPassword: e.target.value,
        });
        setUserErrors({
          ...userErrors,
          oldPasswordErr:
            e.target.value == 0
              ? "this field is required"
              : e.target.value < 10
              ? "Minimum oldPassword 10"
              : null,
        });
        break;
      case "newPassword":
        setUser({
          ...user,
          newPassword: e.target.value,
        });
        setUserErrors({
          ...userErrors,
          newPasswordErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
    }
  };

  const updateUserPassword = (e) => {
    // console.log("welcome");
    //e.preventDefault();
    console.log("adduser", user);
    dispatch(updatePassword(user));
    navigate("/");
  };
  // End login

  return (
    <>
      <MiddeleHeader />
      <LowerHeader />
      <div className="w-50 mx-auto mt-5">
        <form onSubmit={updateUserPassword}>
          {/* input oldPassword */}
          <div className="col  mb-4 border-muted  border-bottom  me-4 d-flex justify-content-between">
            <input
              className="form-control form-control-lg fs-6 border-0 shadow-none"
              type={showPassword1 ? "text" : "password"}
              placeholder={t("oldPassword")}
              name="oldPassword"
              onChange={handelFormChange}
            />
            <span className="me-1 mt-3" onClick={togglePass1}>
              <i class="fas fa-eye"></i>
            </span>
          </div>
          {/* input password */}
          <div className="col  mb-4 border-muted  border-bottom  me-4 d-flex justify-content-between">
            <input
              className="form-control form-control-lg fs-6 border-0 shadow-none"
              type={showPassword2 ? "text" : "password"}
              placeholder={t("New Password")}
              name="newPassword"
              onChange={handelFormChange}
            />
            <span className="me-1 mt-3" onClick={togglePass2}>
              <i class="fas fa-eye"></i>
            </span>
          </div>
          <div className="row py-4 col-rows-1">
            <button
              className="btn btn-primary border border-none p-2 rounded  fs-5 fw-bold d-flex justify-content-between text-uppercase "
              style={{ backgroundColor: "#f68b1e" }}
            >
              <i className="loginBtn" class="fas fa-envelope mt-1 ms-1"></i>
              <span>Update Password</span>
              <span></span>
            </button>
          </div>
        </form>
      </div>
      <Footer2 />
    </>
  );
}
