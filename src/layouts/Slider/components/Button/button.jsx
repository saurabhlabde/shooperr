import { motion, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { buttonAnimation } from "./button.animation";

const SliderButton = ({ props, slideIndex, index, scrollPosition }) => {
  useEffect(() => {
    if (scrollPosition >= 400) {
      return animationButton.stop;
    }
    // else if (scrollPosition <= 399) {
    //   return animationButton.start({
    //     width: "50%",
    //     transition: {
    //       duration: 2.5,
    //     },
    //   });
    // }
  }, [scrollPosition]);

  const { animationButton, restartAnimation } = buttonAnimation({
    slideIndex,
    index,
  });

  return (
    <div
      className="slider-button-section"
      style={{
        backgroundColor: `${props?.background}70` ?? "#313131",
      }}
    >
      <div
        className="sb-background-container"
        onClick={() => {
          restartAnimation();
          return restartAnimation();
        }}
      >
        <motion.div
          id={`sb-background-active-${index}`}
          className="sb-background-active"
          animate={animationButton}
          style={{
            backgroundColor: `${props?.background}` ?? "#313131",
          }}
        ></motion.div>
      </div>

      <div className="sb-section">
        <div className="sb-image-section">
          <img
            className="sb-image"
            src={
              props?.image ??
              "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
        </div>

        <div className="sb-heading-section">
          <h1 className="sb-heading">
            <span>{props?.title ?? "product"}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SliderButton;
