import React from "react";
import { useTranslation } from 'react-i18next';
import "./RatingSlider.scss";
export default function RatingSlider() {
  const { t, i18n } = useTranslation();
  //   useEffect(() => {
  //     window.addEventListener("scroll", isSticky);
  //     return () => {
  //       window.removeEventListener("scroll", isSticky);
  //     };
  //   });

  function getVals() {
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
      let tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }

    let displayElement = parent.getElementsByClassName("rangeValues")[0];
    //displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
    let inp1 = parent.getElementsByClassName("rangeValues")[1];
    let inp2 = parent.getElementsByClassName("rangeValues")[2];
    inp1.value = slide1;
    inp2.value = slide2;
  }

  window.onload = function () {
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
    for (let x = 0; x < sliderSections.length; x++) {
      let sliders = sliderSections[x].getElementsByTagName("input");
      for (let y = 0; y < sliders.length; y++) {
        if (sliders[y].type === "range") {
          sliders[y].oninput = getVals;
          // Manually trigger event first time to display values
          sliders[y].oninput();
        }
      }
    }
  };
  return (
    <>
      <div className="d-flex justify-content-between mb-2">
        <p className="mt-3">{t('PRICSEGP')}</p>
        <button className="btn btn-outline-light text-warning py-0 border-0">
          APPLY
        </button>
      </div>
      <div className="range-slider">
        <span className="rangeValues" />
        <input defaultValue={1} min={1} max={50000} step={500} type="range" />
        <input
          defaultValue={50000}
          min={1000}
          max={50000}
          step={500}
          type="range"
        />
        <div className="d-flex mt-4">
          <input className="form-control rangeValues" type="number" />
          <span className="mt-1">-</span>
          <input className="form-control rangeValues" type="number" />
        </div>
      </div>
    </>
  );
}
