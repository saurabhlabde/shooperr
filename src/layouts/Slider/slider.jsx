import Slider from "react-slick";

import { sliderData } from "../../data/sliderData";

import { SliderImage } from "./components/Image/index";
import { SliderButton } from "./components/Button/index";
import { SliderLine } from "./components/Line/index";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="image-slider-container">
      <div className="is-t-section">
        <Slider {...settings} className="image-slider-lib">
          {sliderData.map((item) => {
            return <SliderImage key={`${item.id}`} props={item} />;
          })}
        </Slider>
      </div>

      <div className="is-b-section">
        <SliderButton />
        <SliderLine />
        <SliderButton />
        <SliderLine />
        <SliderButton />
        <SliderLine />
        <SliderButton />
      </div>
    </div>
  );
};

export default ImageSlider;
