import { Link } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderComponent(props) {
  let userOrder = props.orderItems;
  //console.log("props orderComponent", props.orderItems);
  const navigate = useNavigate();
  const singleProductNavigate = (e, id) => {
    console.log("asdasdasd", id);
    navigate("/singleProduct/" + id);
  };

  const reviewFuncNavigate = (e, id) => {
    console.log("navigate to review id", id);
    navigate(`/review/${id}`);
  };
  return (
    <div className="border-bottom mb-3">
      {userOrder.map((item, index) => {
        return (
          <>
            <div className="col-md-12 mb-3">
              <Link to={"/singleProduct/" + item?.product}>
                <button
                  className="border-0"
                  onClick={(e) => singleProductNavigate(e, item.product)}
                >
                  <div className="card">
                    <div style={{ width: "100%" }} className="card-body row">
                      <div className="col-2">
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src={item.image}
                        />
                      </div>
                      <div className="col-8">
                        <div className="text-truncate">{item.name}</div>
                        <div className="text-secondary">
                          Price :{item.price} EGP
                        </div>
                        <div className="text-secondary">
                          amount :{item.amount}
                        </div>
                      </div>
                      <div className="col-2">
                        <Link
                          className=""
                          style={{ color: "#f68b1e", fontWeight: 500 }}
                        >
                          See Details
                        </Link>
                        <div className="mt-1">
                          Total Price : {props.orderTotal}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </Link>
              <div className="mt-2">
                {/* <Link to={`/review/${item.product}`}> */}
                <button
                  className="btn"
                  onClick={(e) => reviewFuncNavigate(e, item.product)}
                  style={{
                    backgroundColor: "#f68b1e",
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  Add Review
                </button>
                {/* </Link> */}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
