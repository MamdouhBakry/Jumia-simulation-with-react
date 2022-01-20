import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {
  useNavigate
} from "react-router-dom";
import MiddleHeader from '../../Component/Headers/MiddleHeader/MiddeleHeader'
import LowerHeader from '../../Component/Headers/LowerHeader/LowerHeader'
import Footer1 from '../../Component/Footer1/Footer1'
import { signup } from '../../Store/actions/authen/authen';


export default function Registration() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    // lastName: '',
    email: '',
    password: '',
    phone: '',
  })

  const [userErrors, setUserErrors] = useState({
    nameErr: null,
    emailErr: null,
    passwordErr: null,
    phoneErr: null,
  })


  const handelFormChange = (e) => {
    console.log(e.target.name, " :", e.target.value);
    switch (e.target.name) {
      case "name":
        setUser({
          ...user,
          name: e.target.value
        })
        setUserErrors({
          ...userErrors,
          nameErr: e.target.value.length == 0
            ? "this field is required"
            : e.target.value.length < 3
              ? "Minimum length 3 letters" : null
        })
        break;
      case "email":
        setUser({
          ...user,
          email: e.target.value
        })
        setUserErrors({
          ...userErrors,
          emailErr: e.target.value == 0
            ? "this field is required"
            : e.target.value < 10
              ? "Minimum email 10" : null
        })
        break;
      case "password":
        setUser({
          ...user,
          password: e.target.value
        })
        setUserErrors({
          ...userErrors,
          passwordErr: e.target.value.length == 0
            ? "this field is required"
            : e.target.value.length < 4
              ? "Minimum length 4 letters" : null
        })
        break;
      case "phone":
        setUser({
          ...user,
          phone: e.target.value
        })
        setUserErrors({
          ...userErrors,
          phoneErr: e.target.value.length == 0
            ? "this field is required"
            : e.target.value.length < 11
              ? "Minimum length 11 letters" : null
        })
        break;
    }

  }

  const SignUp = (e) => {
    // e.preventDefault();
    console.log("adduser", user);
    dispatch(signup(user))
    navigate('/')
  }



  return (
    <div>
      { console.log("user", user)}
      <MiddleHeader />
      <LowerHeader />
      <section className="loginPage py-5">
        <div className="container-lg ">
          <div className="row justify-content-center">
            <div className="col-lg-8 ">
              <div className="section-title">
                <h4 className="fw-bold mb-5 text-start" style={{ color: "#f68b1e" }}>
                  Create Account{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 ">
              <div className="contact form">
                <form action onSubmit={SignUp}>
                  <div className="row py-4">
                    <div className="col mb-4  border-muted  border-bottom  me-4">
                      <input
                        className="form-control form-control-lg fs-6 border-0"
                        type="text"
                        name="name"
                        placeholder="First Name"
                        value={user.name}
                        onChange={handelFormChange}
                      />
                    </div>
                    <div className="col  mb-4 border-muted  border-bottom  me-4">
                      <input
                        className="form-control form-control-lg fs-6 border-0"
                        type="text"
                        name="lastName"

                        placeholder="Last Name"
                      // value={user.name}
                      // onChange={handelFormChange}
                      />
                    </div>
                  </div>
                  <div className="row py-4">
                    <div className="col mb-4 border-muted  border-bottom  me-4">
                      <input
                        className="form-control form-control-lg fs-6 border-0"
                        type="email"
                        name="email"

                        placeholder="E-mail"
                        value={user.email}
                        onChange={handelFormChange}
                      />
                    </div>
                    <div className="col  mb-4 border-muted  border-bottom  me-4">
                      <input
                        className="form-control form-control-lg fs-6 border-0"
                        type="password"
                        name="password"

                        placeholder="Password"
                        value={user.password}
                        onChange={handelFormChange}
                      />
                    </div>
                  </div>
                  <div className="row py-4">
                    <span className="col-lg-1  mb-4 border-muted  border-bottom  me-4">
                      <span className="text-muted">+20</span>
                    </span>
                    <div className="col-lg-5  mb-4 border-muted  border-bottom  me-4">
                      <input
                        className="form-control form-control-lg fs-6 border-0"
                        type="text"
                        name="phone"

                        placeholder="Phone Number (optional)"
                        value={user.phone}
                        onChange={handelFormChange}
                      />
                    </div>
                  </div>
                  {/* <div class="row py-4">
                      <div class="col-lg-12  mb-4 border-muted  border-bottom  me-4">
                          <button type="submit" class="btn btn-danger px-3">Send Message </button>
                      </div>
                  </div> */}
                  <div className="row ">
                    <div className="text-start">
                      <input
                        type="checkbox"
                        defaultValue={1}
                        id="terms"
                        name="terms"
                      />
                      <label className="ms-2" htmlFor="fi-terms">
                        I accept the
                      </label>
                      <a
                        className=" "
                        target="_blank"
                        rel="noopener"
                        href="/conditions/"
                        style={{ color: "#f68b1e" }}
                      >
                        Terms &amp; Conditions
                      </a>
                    </div>
                  </div>
                  <div className="row py-4">
                    <div className="text-start">
                      <input
                        type="checkbox"
                        defaultValue={1}
                        id="newsletter"
                        name="newsletter"
                        defaultChecked
                      />
                      <label className="ms-2" htmlFor=" ">
                        I want to receive Jumia Newsletters with the best deals and
                        offers
                      </label>
                    </div>
                  </div>
                  <div className="col10 -hr -mtl" data-mid-txt="OR">
                    <a
                      className="btn _fb _i -mtl"
                      href="https://www.facebook.com/v3.2/dialog/oauth?state=55dda13d287d4e4cf0199b780cc7d1fa&redirect_uri=https%3A%2F%2Fwww.jumia.com.eg%2Fcustomer%2Ffacebook%2Flogin%2F&scope=public_profile%2Cemail&response_type=code&approval_prompt=auto&client_id=413652859092940"
                    >
                      <svg viewBox="0 0 24 24" className="ic" width={24} height={24}>
                        <use xlinkHref="https://www.jumia.com.eg/assets_he/images/i-icons.e70b7734.svg#facebook" />
                      </svg>
                      <span />
                    </a>
                  </div>
                  <div className="col10 -tac -pvl -mvl">
                    <div className="row py-4 col-rows-1">
                      <div className=" ">
                        <button type="submit"
                          className="btn btn-primary border border-none p-2 w-100 rounded  fs-5 fw-bold"
                          style={{ backgroundColor: "#f68b1e" }}
                        >
                          CREATE ACCOUNT
                        </button>
                      </div>
                    </div>
                    <div className="row py-3 col-rows-1">
                      <div className="col-12">
                        <button
                          className="btn btn-primary border border-none p-2 w-100 rounded  fs-5  fw-bold m"
                          style={{ backgroundColor: "#344f88" }}
                        >
                          <span className="d-flex justify-content-between text-uppercase"><i className="fab fa-facebook-square" /><span>  Register with Facebook</span><span></span></span>

                        </button>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-8 ">
                        <div className="section-title text-center">
                          <p className> Already have an account?</p>
                          <a
                            className="text-decoration-none link-light  fw-bold "
                            href="/customer/account/login/"
                            style={{ color: "#f68b1e" }}
                          >
                            LOGIN
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer1 />
    </div>
  )
}
