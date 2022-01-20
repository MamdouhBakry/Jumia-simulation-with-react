import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import viewBoxImg from "../../assets/imgs/ViewBox.PNG";
import CatList from "../CatList/CatList";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { t, i18n } = useTranslation();
  // localhost: 5000/api/v1/products?categoryparent=Fashion
  const StoreCategory = (cat) => {
    // e.preventDefault();
    // console.log("eCat", e);
    const category = localStorage.setItem("category", cat);
  };
  return (
    <div>
      <img
        aria-describedby={id}
        variant="contained"
        onMouseEnter={handleClick}
        src={viewBoxImg}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          {/* <CatList /> */}
          <Link to="/products/" className="aa">
            <i className="fas fa-apple-alt" style={{ padding: "8px" }}></i>
            <span style={{ fontSize: "13px" }}> {t("suber")}</span>
          </Link>
          <br />

          <Link
            to="/products"
            className="aa"
            value="Fashion"
            onClick={(e) => StoreCategory("Fashion")}
          >
            <i className="fas fa-tshirt" style={{ padding: "8px" }}></i>
            <span style={{ fontSize: "13px" }}> {t("fasion")}</span>
          </Link>
          <br />

          <Link
            to="/products"
            className="aa"
            onClick={(e) => StoreCategory("Gaming")}
          >
            <i className="fas fa-gamepad" style={{ padding: "8px" }}></i>
            <span style={{ fontSize: "13px" }}>{t("game")}</span>
          </Link>
          <br />

          <Link
            to="/products"
            className="aa"
            onClick={(e) => StoreCategory("smartPhone")}
          >
            <i className="fas fa-mobile-alt" style={{ padding: "8px" }}></i>
            <span style={{ fontSize: "13px" }}> {t("phones")}</span>
          </Link>
          <br />

          <Link
            to="/products"
            className="aa"
            onClick={(e) => StoreCategory("Fashion")}
          >
            <i className="fas fa-feather-alt" style={{ padding: "8px" }}></i>
            <span style={{ fontSize: "13px" }}>{t("healty")}</span>
          </Link>
          <br />

          <Link
            to="/products"
            className="aa"
            onClick={(e) => StoreCategory("")}
          >
            <i className="fas fa-laptop" style={{ padding: "8px" }}></i>
            <span style={{ fontSize: "13px" }}>{t("electro")}</span>
          </Link>
          <br />

          <Link
            to="/products"
            className="aa"
            onClick={(e) => StoreCategory("")}
          >
            <i className="fas fa-child" style={{ padding: "8px" }}></i>
            <span style={{ fontSize: "13px" }}>{t("baby")}</span>
          </Link>
          <br />

          <Link
            to="/category"
            className="aa"
            onClick={(e) => StoreCategory("")}
          >
            <i className="fas fa-home" style={{ padding: "8px" }}></i>
            <span style={{ fontSize: "13px" }}>{t("nhome")}</span>
          </Link>
          <br />

          <Link
            to="/products"
            className="aa"
            onClick={(e) => StoreCategory("")}
          >
            <i className="fas fa-desktop" style={{ padding: "8px" }}></i>
            <span style={{ fontSize: "13px" }}> {t("computer")}</span>
          </Link>
          <br />

          <Link
            to="/products"
            className="aa"
            onClick={(e) => StoreCategory("")}
          >
            <i className="fas fa-dumbbell" style={{ padding: "8px" }}></i>
            <span style={{ fontSize: "13px" }}>{t("sport")}</span>
          </Link>
          <br />

          <Link
            to="/products"
            className="aa"
            onClick={(e) => StoreCategory("")}
          >
            <i className="fas fa-car" style={{ padding: "8px" }}></i>
            <span style={{ fontSize: "13px" }}> {t("outomobile")}</span>
          </Link>
          <br />

          <Link
            to="/products"
            className="aa"
            onClick={(e) => StoreCategory("")}
          >
            <i className="fas fa-ellipsis-h" style={{ padding: "8px" }}></i>
            <span style={{ fontSize: "13px" }}> {t("other")}</span>
          </Link>
          <br />
        </Typography>
      </Popover>
    </div>
  );
}
