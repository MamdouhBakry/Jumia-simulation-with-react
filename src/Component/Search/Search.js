import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Store/actions/ProductActions/getAllProducts";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { GetParentCategory } from "../../Store/actions/categories/category";


function SearchBar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate()
  const products = useSelector(state => state.AllProducts)
  const category = useSelector((state) => state.category);
  localStorage.setItem("catparent", JSON.stringify(category))
  console.log(category)

  const dispatch = useDispatch();
  console.log("asdadadasdadasdasd", products)

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(GetParentCategory());

  }, []);


  const [filteredData, setFilteredData] = useState([]);
  const [filteredData1, setFilteredData1] = useState([]);
  const [filteredData2, setFilteredData2] = useState([]);



  const [selectedCategory, setselectedCategory] = useState("");
  const [wordEntered, setWordEntered] = useState("");



  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = products.filter((product) => {
      console.log("product.categoryparent", product.categoryparent)

      return product.categoryparent.toLowerCase().includes(searchWord.toLowerCase());

    });
    const newFilter2 = products.filter((product) => {
      return product.category.toLowerCase().includes(searchWord.toLowerCase());

    });
    const newFilter3 = products.filter((product) => {
      return product.name.toLowerCase().includes(searchWord.toLowerCase());

    });
    const key = "categoryparent"
    const arrayUniqueByKey = [...new Map(newFilter.map(item =>
      [item[key], item])).values()];
    const key2 = "category"
    const arrayUniqueByKey2 = [...new Map(newFilter2.map(item =>
      [item[key2], item])).values()];
    const key3 = "name"
    const arrayUniqueByKey3 = [...new Map(newFilter3.map(item =>
      [item[key3], item])).values()];



    //  console.log("asdas",arrayUniqueByKey)




    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(arrayUniqueByKey);
      //   setFilteredData2(arrayUniqueByKey2)
    }
    if (searchWord === "") {
      setFilteredData1([]);
    } else {
      setFilteredData1(arrayUniqueByKey2);
      //   setFilteredData2(arrayUniqueByKey2)
    }
    if (searchWord === "") {
      setFilteredData2([]);
    } else {
      setFilteredData2(arrayUniqueByKey3);
      //   setFilteredData2(arrayUniqueByKey2)
    }
  };




  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  //   let aa=new Set(filteredData)
  // const key = "category"
  // const arrayUniqueByKey = [...new Map(filteredData.map(item =>
  //     [item[key], item])).values()];

  // console.log("asdas",arrayUniqueByKey)
  const getCategoty = (e) => {
    setselectedCategory(e.target.innerText)
    setWordEntered(e.target.innerText)
    // localStorage.setItem("searchValue",setselectedCategory)
    // navigate("/productaftersearch")
    // console.log(e.target.innerText)
  }

  const sendCategory = () => {
    localStorage.setItem("searchValue", selectedCategory)
    if (window.location.href === "http://localhost:3000/productaftersearch") {
      window.location.reload()

    } else {
      navigate("/productaftersearch")

    }



  }

  return (

    <form className="">
      <div className="d-flex">
        <input
          type="search"
          className="form-control shadow-none  "
          placeholder={t('searchProduct')}
          aria-label="Search"
          onChange={handleFilter}
          value={wordEntered}
        />
        {/* <input
      className="ms-2 bg-warning rounded border-warning text-light fw-bold"
      type="button"
      defaultValue="Search"
    /> */}

        <div role="button" className="btn d-inline d-xl-block mx-1 px-3   "
          onClick={sendCategory}
          style={{ "width": "100px", "background-color": "#f68b1e", "color": "white", "font-size": "14px", "font-weight": "600", "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)", "margin-left": "10px" }}>{t("search")}</div>
      </div>


      <div style={{ "position": "absolute", "zIndex": "100" }}>
        {filteredData.length != 0 && (
          <div className="dataResult ">

            {filteredData.slice(0, 3).map((value, key) => {
              return (
                <>


                  <a onClick={getCategoty} className="dataItem " style={{ "height": "30px" }} >
                    <p style={{ "margin-left": "3px", "padding-top": "5px" }} >{value.categoryparent}
                    </p>

                  </a>


                </>

              );
            })}

          </div>)}






        {filteredData1.length != 0 && (
          <div className="dataResult" >

            {filteredData1.slice(0, 3).map((value, key) => {
              return (

                <>


                  <a onClick={getCategoty} className="dataItem " style={{ "height": "30px" }}  >
                    <p style={{ "margin-left": "3px", "padding-top": "5px" }}>{value.category}
                    </p>

                  </a>


                </>

              );
            })}

          </div>)}


      </div>

    </form>



    // <div className="search">
    //   <div className="searchInputs">
    //     <input
    //       type="text"
    //       className=""
    //       placeholder="search..."
    //       value={wordEntered}
    //       onChange={handleFilter}
    //     />
    //     <div className="searchIcon">
    //       {filteredData.length === 0 ? (
    //         <SearchIcon />
    //       ) : (
    //         <CloseIcon id="clearBtn" onClick={clearInput} />
    //       )}
    //     </div>
    //   </div>
    //   {filteredData.length != 0 && (
    //     <div className="dataResult">
    //       {filteredData.slice(0, 15).map((value, key) => {
    //         return (
    //             <>
    //           <a onClick={getCategoty} className="dataItem"  >
    //             <p >{value.categoryparent} 
    //              </p>

    //           </a>
    //           <a onClick={getCategoty} className="dataItem"  >
    //             <p>{value.category} 
    //              </p>

    //           </a>


    //           </>

    //         );
    //       })}

    //     </div>

    //   )}
    // </div>
  );
}

export default SearchBar;
