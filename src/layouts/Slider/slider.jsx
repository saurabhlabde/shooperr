import { useState } from "react";
import Slider from "react-slick";

import { sliderData } from "../../data/sliderData";

import { SliderImage } from "./components/Image/index";
import { SliderButton } from "./components/Button/index";
import { SliderLine } from "./components/Line/index";

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    dotsClass: "slick-dots slick-thumb",
    beforeChange: (current, next) => setSlideIndex(next),
    customPaging: function (i) {
      return (
        <div className="s-btn-section">
          <SliderButton
            key={`sb-${i}`}
            props={sliderData[i]}
            slideIndex={slideIndex}
            index={i}
          />
          {i + 1 < sliderData.length && <SliderLine />}
        </div>
      );
    },
  };

  return (
    <div className="image-slider-container">
      <div className="is-t-section">
        <Slider
          {...settings}
          className="image-slider-lib"
          style={{
            backgroundColor: sliderData[slideIndex]?.background ?? "#ffffff",
          }}
        >
          {sliderData.map((item) => {
            return <SliderImage key={`${item.id}`} props={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
