import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReview,
  getSinglePrReview,
  updateReview,
} from "../../Store/actions/Review/ReviewAction";
import SeeAll from "../SeeAll/SeeAll";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useTranslation } from 'react-i18next'
//images for Rate

import r1 from "../../assets/imgs/Rate1.PNG";
import r2 from "../../assets/imgs/Rate2.PNG";
import r3 from "../../assets/imgs/Rate3.PNG";
import r4 from "../../assets/imgs/Rate4.PNG";
import r5 from "../../assets/imgs/Rate5.PNG";
import { getSingleUser } from "../../Store/actions/UserActions/getSingleUser";
import { getAllUsers } from "../../Store/actions/UserActions/userActions";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";

export default function ShowReview(props) {
  const { t, i18n } = useTranslation();
  const Reviews = useSelector((state) => state.review);
  //const users = useSelector((state) => state.users);
  let user_Id;
  if (JSON.parse(localStorage.getItem("user")) == null) {
    user_Id = "";
  } else {
    user_Id = JSON.parse(localStorage.getItem("user")).userId;
  }
  // let user_Id = JSON.parse(localStorage.getItem("user")).userId;
  // console.log("user",user_Id)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSinglePrReview(props.id));
    //dispatch(getAllUsers());
  }, []);

  const EditReview = (e, itemInfo) => {
    console.log("itemInfo", itemInfo);
    localStorage.setItem("review", JSON.stringify(itemInfo));
    navigate("/updateReview");
  };
  const DeleteReview = (e, id) => {
    dispatch(deleteReview(id));
    window.location.reload();
  };
  console.log("Reviews Reviews rrrrrrrrrr", Reviews);
  //console.log("Get all Users", users);

  // const getUserFun = (user_ID) => {
  //   dispatch(getSingleUser(user_ID));
  // };
  // console.log("current user ", user);
  return (
    <>
      <SeeAll className="border-bottom " title={t("Verified Customer Feedback")} />
      <hr />
      <div className="row">
        <div className="col-4 text-center">
          <div className="mb-3 fw-bold">{120} {t('VERIFIED PRODUCT RATINGS')}</div>
          <div state={{ width: "90%" }} className="mx-auto bg-light">
            <div className="mb-2">{props.averageRating}/5</div>
            {props.averageRating === 1 ? (
              <img className="mb-2" src={r1} />
            ) : props.averageRating === 2 ? (
              <img className="mb-2" src={r2} />
            ) : props.averageRating === 3 ? (
              <img className="mb-2" src={r3} />
            ) : props.averageRating === 4 ? (
              <img className="mb-2" src={r4} />
            ) : props.averageRating === 5 ? (
              <img className="mb-2" src={r5} />
            ) : (
              ""
            )}
            <div className="mb-3">{120} {t('VERIFIED PRODUCT RATINGS')}</div>
          </div>
        </div>
        <div className="col-8">
          <div className="mb-3">{t('Product Reviews')} ({Reviews.length})</div>
          {Reviews.map((item, index) => {
            return (
              <div className="mb-4 border-bottom">
                {/* <div>Review Rating : {item.rating}</div> */}
                {item.rating === 1 ? (
                  <img src={r1} />
                ) : item.rating === 2 ? (
                  <img src={r2} />
                ) : item.rating === 3 ? (
                  <img src={r3} />
                ) : item.rating === 4 ? (
                  <img src={r4} />
                ) : item.rating === 5 ? (
                  <img src={r5} />
                ) : (
                  ""
                )}
                <div className="fw-bold mb-3">{item.title}</div>
                <div className="mb-3">{item.comment}</div>
                <div className="d-flex justify-content-between">
                  <div className="text-muted">
                    created at {item.updatedAt.substring(0, 10)}
                  </div>
                  <div className="mb-3" style={{ color: "#ffe086" }}>
                    <CheckCircleRoundedIcon />
                    Verified Purchase
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  {user_Id === item.user && (
                    <>
                      <button
                        onClick={(e) => EditReview(e, item)}
                        className="btn btn-warning text-white"
                      >
                        Edit Review
                      </button>
                      <button
                        onClick={(e) => DeleteReview(e, item._id)}
                        className="btn btn-danger text-white"
                      >
                        Delete Review
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
