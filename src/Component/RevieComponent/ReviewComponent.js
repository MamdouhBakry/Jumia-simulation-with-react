import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Footer2 from "../Footer2/Footer2";
import LowerHeader from "../Headers/LowerHeader/LowerHeader";
import MiddeleHeader from "../Headers/MiddleHeader/MiddeleHeader";
import { createReview } from "../../Store/actions/Review/ReviewAction";
import { useNavigate, useParams } from "react-router-dom";

export default function ReviewComponent() {
  const { id } = useParams();
  const user_Id = JSON.parse(localStorage.getItem("user")).userId;
  console.log("id id", id, " user id ", user_Id);
  const [Review, setReview] = useState({
    rating: "",
    title: "",
    comment: "",
    user: user_Id,
    product: id,
  });
  const [ReviewErrors, setReviewErrors] = useState({
    ratingErr: null,
    titleErr: "",
    commentErr: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelFormChange = (e) => {
    console.log(e.target.name, " :", e.target.value);
    console.log("Reviewrrrr", " :", Review);
    switch (e.target.name) {
      case "title":
        setReview({
          ...Review,
          title: e.target.value,
        });
        setReviewErrors({
          ...ReviewErrors,
          titleErr:
            e.target.value == 0
              ? "this field is required"
              : e.target.value < 10
              ? "Minimum title 10"
              : null,
        });
        break;
      case "comment":
        setReview({
          ...Review,
          comment: e.target.value,
        });
        setReviewErrors({
          ...ReviewErrors,
          commentErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "rating":
        setReview({
          ...Review,
          rating: Number(e.target.value),
        });
        setReviewErrors({
          ...ReviewErrors,
          commentErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
    }
  };
  const createOrderReview = (e) => {
    e.preventDefault();
    dispatch(createReview(Review));
    setTimeout(() => {
      navigate("/singleProduct/" + id);
    }, 800);

    console.log("Review Review", Review);
  };
  return (
    <>
      <MiddeleHeader />
      <LowerHeader />
      <div className="w-50 mx-auto mt-5">
        <label className="mb-1 text-muted">Select Product Rate</label>
        <form onSubmit={createOrderReview}>
          <div className="col  mb-4 border-muted  border-bottom  me-4 d-flex justify-content-between">
            <select
              name="rating"
              onChange={handelFormChange}
              className="form-select"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          {/* input title */}
          <div className="col  mb-4 border-muted  border-bottom  me-4 d-flex justify-content-between">
            <input
              className="form-control form-control-lg fs-6 border-0 shadow-none"
              type="text"
              placeholder="Enter Review Title"
              name="title"
              onChange={handelFormChange}
            />
          </div>
          {/* input password */}
          <div className="col  mb-4 border-muted  border-bottom  me-4 d-flex justify-content-between">
            <input
              className="form-control form-control-lg fs-6 border-0 shadow-none"
              type="text"
              placeholder="Enter Review Comment"
              name="comment"
              onChange={handelFormChange}
            />
          </div>
          <div className="row py-4 col-rows-1">
            <button
              className="btn btn-primary border border-none p-2 rounded  fs-5 fw-bold d-flex justify-content-between text-uppercase "
              style={{ backgroundColor: "#f68b1e" }}
            >
              <i className="loginBtn" class="fas fa-envelope mt-1 ms-1"></i>
              <span>Add Review</span>
              <span></span>
            </button>
          </div>
        </form>
      </div>
      <Footer2 />
    </>
  );
}
