import React, { useState } from "react";
import LowerHeader2 from "../../Component/Headers/LowerHeader2/LowerHeader2";
import Footer1 from "../../Component/Footer1/Footer1";
import SideBar from "../SideBar/SideBar";
import { addProduct } from "../../Store/actions/ProductActions/AddProduct";
import { useSelector, useDispatch } from "react-redux";
export default function AddProduct() {
  const product = useSelector((state) => state.product);
  //const dispatch = useDispatch();
  const [Product, setProduct] = useState({
    nameAr: "",
    nameEn: "",
    price: null,
    descriptionAr: "",
    descriptionEn: "",
    image: "",
    categoryAr: "",
    categoryEn: "",
    categoryparentAr: "",
    categoryparentEn: "",
    sku: "",
    weight: null,
    size: "",
    model: "",
    material: "",
    quantity: null,
    shopType: "",
    company: "",
    brand: "",
    colors: "",
  });
  const [ProductErrors, setProductErrors] = useState({
    nameArErr: "",
    nameEnErr: "",
    priceErr: "",
    descriptionArErr: "",
    descriptionEnErr: "",
    imageErr: "",
    categoryArErr: "",
    categoryEnErr: "",
    skuErr: "",
    weightErr: "",
    sizeErr: "",
    modelErr: "",
    materialErr: "",
    quantityErr: "",
    shopTypeErr: "",
    companyErr: "",
    brandErr: "",
    colorsErr: "",
  });
  const dispatch = useDispatch();

  const handelFormChange = (e) => {
    console.log(e.target.name, " :", e.target.value);
    console.log("Seler Product", " :", Product);
    switch (e.target.name) {
      case "nameAr":
        setProduct({
          ...Product,
          nameAr: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          nameArErr:
            e.target.value == 0
              ? "this field is required"
              : e.target.value < 10
              ? "Minimum title 10"
              : null,
        });
        break;
      case "nameEn":
        setProduct({
          ...Product,
          nameEn: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          nameEnErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "price":
        setProduct({
          ...Product,
          price: Number(e.target.value),
        });
        setProductErrors({
          ...ProductErrors,
          priceErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "descriptionAr":
        setProduct({
          ...Product,
          descriptionAr: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          descriptionArErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "descriptionEn":
        setProduct({
          ...Product,
          descriptionEn: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          descriptionEnErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "image":
        setProduct({
          ...Product,
          image: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          imageErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "categoryAr":
        setProduct({
          ...Product,
          categoryAr: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          categoryArErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "categoryEn":
        setProduct({
          ...Product,
          categoryEn: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          categoryEnErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "sku":
        setProduct({
          ...Product,
          sku: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          skuErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "weight":
        setProduct({
          ...Product,
          weight: Number(e.target.value),
        });
        setProductErrors({
          ...ProductErrors,
          weightErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "size":
        setProduct({
          ...Product,
          size: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          sizeErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "model":
        setProduct({
          ...Product,
          model: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          modelErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "material":
        setProduct({
          ...Product,
          material: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          materialErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "quantity":
        setProduct({
          ...Product,
          quantity: Number(e.target.value),
        });
        setProductErrors({
          ...ProductErrors,
          quantityErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "shopType":
        setProduct({
          ...Product,
          shopType: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          shopTypeErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "company":
        setProduct({
          ...Product,
          company: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          companyErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "brand":
        setProduct({
          ...Product,
          brand: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          brandErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
      case "colors":
        setProduct({
          ...Product,
          colors: e.target.value,
        });
        setProductErrors({
          ...ProductErrors,
          colorsErr:
            e.target.value.length == 0
              ? "this field is required"
              : e.target.value.length < 4
              ? "Minimum length 4 letters"
              : null,
        });
        break;
    }
  };
  const AddProduct = () => {
    dispatch(addProduct(Product));
  };
  return (
    <>
      <LowerHeader2 />
      <div className="row  mb-5">
        {/* <div className="col-3">
          <div className="w-75 mx-auto mt-5">
            <SideBar />
          </div>
        </div> */}
        <div className="col-9">
          <div className="w-75 mx-auto">
            <h1 className="text-center ">Add Product</h1>
            <form onSubmit={AddProduct}>
              {/* Name English */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Name in English"
                name="nameEn"
                onChange={handelFormChange}
              />
              {/* Name Arabic */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Name in Arabic"
                name="nameAr"
                onChange={handelFormChange}
              />
              {/* Price */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="number"
                placeholder="Enter Product Price"
                name="proce"
                onChange={handelFormChange}
              />
              {/* DescriptionEn */}
              <textarea
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Description in English"
                name="descriptionEn"
                onChange={handelFormChange}
              />
              {/* DescriptionAr */}
              <textarea
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Description in Arabic"
                name="descriptionAr"
                onChange={handelFormChange}
              />
              {/* image */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="file"
                name="image"
                placeholder="Enter Your  Product  image"
                accept="image/*"
                required
              />
              {/* Category Arabic */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Category in Arabic"
                name="categoryAr"
                onChange={handelFormChange}
              />
              {/* Category English */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Category in English"
                name="categoryEn"
                onChange={handelFormChange}
              />
              {/* SKU */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product SKU"
                name="sku"
                onChange={handelFormChange}
              />
              {/* Weight */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="number"
                placeholder="Enter Product Weight"
                name="weight"
                onChange={handelFormChange}
              />
              {/* Size */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Size"
                name="size"
                onChange={handelFormChange}
              />
              {/* Model */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Model"
                name="model"
                onChange={handelFormChange}
              />
              {/* Material */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Material"
                name="material"
                onChange={handelFormChange}
              />
              {/* Quantity */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="number"
                placeholder="Enter Product Quantity"
                name="quantity"
                onChange={handelFormChange}
              />
              {/* ShopeType */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Shop Type"
                name="shopType"
                onChange={handelFormChange}
              />
              {/* Company */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Company"
                name="company"
                onChange={handelFormChange}
              />
              {/* Brand */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Brand"
                name="brand"
                onChange={handelFormChange}
              />
              {/* Color */}
              <input
                className="form-control form-control-lg fs-6 mb-2 shadow-none"
                type="text"
                placeholder="Enter Product Color"
                name="colors"
                onChange={handelFormChange}
              />
              <div className="row py-4 px-2 col-rows-1">
                <button
                  className="btn btn-primary border border-none p-2 rounded  fs-5 fw-bold  "
                  style={{ backgroundColor: "#f68b1e" }}
                >
                  <span>Add Product</span>
                  <span></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer1 />
    </>
  );
}
