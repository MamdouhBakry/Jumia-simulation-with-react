import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./AddressDetails.scss";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Store/actions/UserActions/userActions";
import { getSingleUser } from "../../Store/actions/UserActions/getSingleUser";

export default function AddressDetails() {
  const { t, i18n } = useTranslation();
  const id = JSON.parse(localStorage.getItem("user")).userId;
  // console.log("asdadsasdaaaaaaaaaaa",id)

  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  // console.log("hhhhhhhhhhhhhhhhhhhhhhh",user)
  return (
    <div>
      <h6 style={{ "font-size": "14px", color: "#ABABAB" }}>{t("CHECKOUT")}</h6>
      <div className="card">
        <div className="card-header bg-white  fw-bolder  ">
          <CheckCircleRoundedIcon color="success" />
          <span style={{ fontSize: "14px", fontWeight: "500" }}>
            {" "}
            1. {t("ADDRESS DETAILS")}
          </span>
          {/* Button trigger modal */}
          {/* <button
            type="button"
            className="btn chngbtn mx-5"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            CHANGE
          </button> */}
          {/* Modal */}
          <div
            className="modal fade  "
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Address Book
                  </h5>
                  {/* <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  /> */}
                </div>
                <div className="modal-body">
                  {/* Button trigger modal */}
                  {/* <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Launch demo modal
                  </button> */}
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    {/* <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div> */}
                  </div>

                  <hr />
                  {/* <div>
                    <p>DEFAULT ADDRESS</p>
                    <h5 className="card-title ">{user.name}</h5>
                    <p className="card-text ">
                      {user.email} <br />
                      +201152558538
                    </p>
                  </div> */}
                </div>
                {/* <div className="modal-footer">
                  <button type="button" className="btn modalBtn text-white ">
                    USE THIS ADDRESS
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h6 className="card-title px-3 fw-bolder "> {user.name}</h6>
          <p className="card-text px-3  useAddress">
            {user.email} <br />
            +201152558538
            <br />
            Qena
          </p>
        </div>
      </div>
    </div>
  );
}
