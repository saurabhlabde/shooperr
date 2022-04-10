import React, { Component } from "react";
import Slider from "react-slick";

import { sliderData } from "../../data/sliderData";

import { SliderImage } from "./components/Image/index";
import { SliderButton } from "./components/Button/index";
import { SliderLine } from "./components/Line/index";

export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.state = {
      activeSlide: 0,
    };
  }

  play() {
    this.slider.slickPlay();
  }

  pause() {
    this.slider.slickPause();
  }

  paging({ i, activeSlide, scrollPosition }) {
    return (
      <div className="s-btn-section">
        <SliderButton
          key={`sb-${i}`}
          props={sliderData[i]}
          slideIndex={activeSlide}
          index={i}
          scrollPosition={scrollPosition}
        />
        {i + 1 < sliderData.length && <SliderLine />}
      </div>
    );
  }

  render() {
    this.componentDidUpdate = () => {
      if (this.props.scrollPosition >= 400) {
        return this.pause();
      } else if (this.props.scrollPosition <= 399) {
        return this.play();
      }
    };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: null,
      prevArrow: null,
      cssEase: "linear",
      dotsClass: "slick-dots slick-thumb",
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
    };

    return (
      <div className="image-slider-container">
        <div className="is-t-section">
          <Slider
            ref={(slider) => (this.slider = slider)}
            {...settings}
            className="image-slider-lib"
            style={{
              backgroundColor:
                sliderData[this?.state?.activeSlide]?.background ?? "#ffffff",
            }}
            customPaging={(i) => {
              return this.paging({
                i,
                activeSlide: this?.state?.activeSlide,
                scrollPosition: this?.props?.scrollPosition,
              });
            }}
          >
            {sliderData.map((item) => {
              return <SliderImage key={`${item.id}`} props={item} />;
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
