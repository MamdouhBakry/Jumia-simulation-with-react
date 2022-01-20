import React, { useState } from "react";
import "./SellerLogin.scss";
import img from '../../../src/assets/imgs/Sellerlogo.png'
import { useDispatch } from 'react-redux';
import {
  useNavigate
} from "react-router-dom";
import { signup, signupSeller } from "../../Store/actions/authen/authen";

export default function SellerLogin() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [seller, setUser] = useState({
    name: '',
    // lastName: '',
    email: '',
    password: '',
    phone: '',
    role: 'seller',
    sellershopname: '',
    // sellerlogo: '',
    // image:''
    
  })

  const [sellerErrors, setUserErrors] = useState({
    nameErr: null,
    emailErr: null,
    passwordErr: null,
    phoneErr: null,
     roleErr: null,
   sellershopnameErr: null,
  })


  const handelFormChange = (e) => {
    console.log(e.target.name, " :", e.target.value);
    switch (e.target.name) {
      case "name":
        setUser({
          ...seller,
          name: e.target.value
        })
        setUserErrors({
          ...sellerErrors,
          nameErr: e.target.value.length == 0
            ? "this field is required"
            : e.target.value.length < 3
              ? "Minimum length 3 letters" : null
        })
        break;
      case "email":
        setUser({
          ...seller,
          email: e.target.value
        })
        setUserErrors({
          ...sellerErrors,
          emailErr: e.target.value == 0
            ? "this field is required"
            : e.target.value < 10
              ? "Minimum email 10" : null
        })
        break;
      case "password":
        setUser({
          ...seller,
          password: e.target.value
        })
        setUserErrors({
          ...sellerErrors,
          passwordErr: e.target.value.length == 0
            ? "this field is required"
            : e.target.value.length < 4
              ? "Minimum length 4 letters" : null
        })
        break;
      case "phone":
        setUser({
          ...seller,
          phone: e.target.value
        })
        setUserErrors({
          ...sellerErrors,
          phoneErr: e.target.value.length == 0
            ? "this field is required"
            : e.target.value.length < 11
              ? "Minimum length 11 letters" : null
        })
        break;
      case "sellershopname":
        setUser({
          ...seller,
          sellershopname: e.target.value
        })
        setUserErrors({
          ...sellerErrors,
          sellershopnameErr: e.target.value.length == 0
            ? "this field is required"
            : e.target.value.length < 11
              ? "Minimum length 11 letters" : null
        })
        break;
    }

  }

  const SignUp = (e) => {
    // e.preventDefault();
    console.log("addseller", seller);
    dispatch(signupSeller(seller))
    navigate('/')
  }














  return (
    <>
      <div className="container">
        <div className="row  pt-3  bordered ">
          <div className="col-2 pb-3">
          <img src={img} alt="" />
          </div>
        
        </div>
        <div className="row mx-auto my-5">
          
          <div className="col-12 pt-2 " style={{"background":"#f2f2f2"}}>
          <h5 className>Add Seller Account Information</h5>
            <form>
              {/* Shope */}
              <div className=" row ">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle ">Shope&nbsp;*</label>
                </div>
                <div className="col-9">
                  <input
                     onChange={handelFormChange}
                    type="text"
                    name="shop_name"
                    required
                    maxlength="255"
                    name="sellershopname"
                    
                  />
                  <p className="desc">
                    Choose a unique name for your online shop: this is the name
                    that will appear on the Jumia marketplace! It is forbidden
                    to use a registered trademark in your shop name without the
                    brand authorisation.
                  </p>
                </div>
              </div>
              {/* company type */}
              <div className=" row ">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">
                    Please select if you're an Individual or Business
                    Entity/Company&nbsp;*
                  </label>
                </div>
                <div className="col-9">
                  <select>
                    <option value="">-Choose an option-</option>
                    <option value="0">Business Entity /Company</option>
                    <option value="1">Indvidual.</option>
                  </select>
                </div>
              </div>
              {/* manager name */}
              <div className=" row pt-2 ">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">Account Manager First and Last Name&nbsp;*</label>
                </div>
                <div className="col-9">
                  <input
                     onChange={handelFormChange}
                    type="text"
                    name="shop_name"
                    required
                    maxlength="255"
                    name="name"
                  />
                  <p className="desc">
                  Your name or the name of the person in your team who
                          will manage your account. This is the contact we will
                          primarily use to contact you.
                  </p>
                </div>
              </div>
              {/* phone number */}
              <div className=" row ">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">Account manager phone number *</label>
                </div>
                <div className="col-9">
                  <input
                     onChange={handelFormChange}
                    type="text"
                    name="shop_name"
                    required
                    name="phone"
                  />
                  <p className="desc">
                  When we need to contact you urgently, this is the number we will call.
                  </p>
                </div>
              </div>
              {/* emeail */}
              <div className=" row ">
                <div className="col-3 d-inline text-end" >
                  <label className="Ltitle  ">Email Address *</label>
                </div>
                <div className="col-9">
                  <input
                     onChange={handelFormChange}
                    type="email"
                    name="email"
                    required
                    maxlength="255"
                  />
                  <p className="desc">
                  Your account will be linked to this email address and we will use it to send all our communications.
                  </p>
                </div>
              </div>
{/* password */}
              <div className=" row  pt-3">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">Password *</label>
                </div>
                <div className="col-9">
                  <input
                     onChange={handelFormChange}
                    type="text"
                    name="spassword"
                    required
                    maxlength="255"
                    name="password"
                  />
                  <p className="desc">
                  At least 8 characters containing a capital letter, a lower letter and a numeric character
                  </p>
                </div>
              </div>
         
              {/* Ecotract  */}
              <div className=" row  pt-3">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">Econtract Egypt&nbsp;*</label>
                </div>
                <div className="col-9">
                <input
                   onChange={handelFormChange}
                          type="checkbox"
                         
                        />
                        <span  class="help-block help-block-column">
                          
                        &nbsp;I have read and accepted 
                          <a
                            href="/user/signup/tcagreementcontent/page/334"
                            data-modalprint="true"
                            > &nbsp;Econtract Egypt</a
                          >
                        </span>
                </div>
               
              </div>
              {/* submit */}
              <div className=" row justify-content-end mt-2   pe-3">
              
              <button
              type="button"
                  className="btn Btn  fw-bolder  text-white  col-2  "
                  onClick={SignUp}
                
              >
                Continue
              </button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}



{/* 
<>
  <div className="container">
    <div className="row  pt-3  bordered ">
      <div className="col-2 pb-3">
        <img src={img} alt="" />
      </div>

    </div>
    <div className="row mx-auto my-5">

      <div className="col-12 pt-2 " style={{ "background": "#f2f2f2" }}>
        <h5 className>Add Seller Account Information</h5>
        <form> */}
          {/* Shope */}
          {/* <div className=" row ">
            <div className="col-3 d-inline text-end">
              <label className="Ltitle ">Shope&nbsp;*</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                name="shop_name"
                required
                maxlength="255"
              />
              <p className="desc">
                Choose a unique name for your online shop: this is the name
                that will appear on the Jumia marketplace! It is forbidden
                to use a registered trademark in your shop name without the
                brand authorisation.
              </p>
            </div>
          </div> */}
          {/* company type */}
          {/* <div className=" row ">
            <div className="col-3 d-inline text-end">
              <label className="Ltitle  ">
                Please select if you're an Individual or Business
                Entity/Company&nbsp;*
              </label>
            </div>
            <div className="col-9">
              <select>
                <option value="">-Choose an option-</option>
                <option value="0">Business Entity /Company</option>
                <option value="1">Indvidual.</option>
              </select>
            </div>
          </div> */}
          {/* manager name */}
          {/* <div className=" row pt-2 ">
            <div className="col-3 d-inline text-end">
              <label className="Ltitle  ">Account Manager First and Last Name&nbsp;*</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                name="shop_name"
                required
                maxlength="255"
              />
              <p className="desc">
                Your name or the name of the person in your team who
                will manage your account. This is the contact we will
                primarily use to contact you.
              </p>
            </div>
          </div> */}
          {/* phone number */}
          {/* <div className=" row ">
            <div className="col-3 d-inline text-end">
              <label className="Ltitle  ">Account manager phone number *</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                name="shop_name"
                required
              />
              <p className="desc">
                When we need to contact you urgently, this is the number we will call.
              </p>
            </div>
          </div> */}
          {/* Additional phone number */}
          {/* <div className=" row ">
            <div className="col-3 d-inline text-end">
              <label className="Ltitle  ">Additional phone number</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                name="shop_name"
              />
              <p className="desc">
                Another number where we can reach you ?
              </p>
            </div>
          </div> */}
          {/* emeail */}
          {/* <div className=" row ">
            <div className="col-3 d-inline text-end" >
              <label className="Ltitle  ">Email Address *</label>
            </div>
            <div className="col-9">
              <input
                type="email"
                name="shop_name"
                required
                maxlength="255"
              />
              <p className="desc">
                Your account will be linked to this email address and we will use it to send all our communications.
              </p>
            </div>
          </div> */}
          {/* confirm email */}
          {/* <div className=" row  ">
            <div className="col-3 d-inline text-end">
              <label className="Ltitle  ">Retype Email Address *</label>
            </div>
            <div className="col-9">
              <input
                type="email"
                name="shop_name"
                required

              />

            </div> */}
            {/* password */}
          {/* </div>
          <div className=" row  pt-3">
            <div className="col-3 d-inline text-end">
              <label className="Ltitle  ">Password *</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                name="spassword"
                required
                maxlength="255"
              />
              <p className="desc">
                At least 8 characters containing a capital letter, a lower letter and a numeric character
              </p>
            </div>
          </div> */}
          {/* cofirm password */}
          {/* <div className=" row ">
            <div className="col-3 d-inline text-end">
              <label className="Ltitle  ">Retype Password *</label>
            </div>
            <div className="col-9">
              <input
                type="password"
                name="shop_name"
                required

              />
            </div>
          </div> */}
          {/* Ecotract  */}
          {/* <div className=" row  pt-3">
            <div className="col-3 d-inline text-end">
              <label className="Ltitle  ">Econtract Egypt&nbsp;*</label>
            </div>
            <div className="col-9">
              <input
                type="checkbox"

              />
              <span class="help-block help-block-column">

                &nbsp;I have read and accepted
                <a
                  href="/user/signup/tcagreementcontent/page/334"
                  data-modalprint="true"
                > &nbsp;Econtract Egypt</a
                >
              </span>
            </div>

          </div> */}
          {/* submit */}
          {/* <div className=" row justify-content-end mt-2   pe-3">

            <button
              type="button"
              className="btn Btn  fw-bolder  text-white  col-2  "

            >
              Continue
            </button>

          </div>
        </form>
      </div>
    </div>
  </div>
</> */}