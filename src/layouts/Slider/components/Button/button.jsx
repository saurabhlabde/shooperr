import { motion, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { buttonAnimation } from "./button.animation";

const SliderButton = ({ props, slideIndex, index }) => {
  const [active, setActive] = useState(false);

  const { buttonVariants } = useMemo(
    () => buttonAnimation({ slideIndex }),
    [buttonAnimation]
  );

  const clickHandel = () => {
    setActive(true);

    setTimeout(() => {
      setActive(false);
    }, 1000);
  };

  return (
    <div
      className="slider-button-section"
      style={{
        backgroundColor: `${props?.background}70` ?? "#313131",
      }}
    >
      <motion.div
        id={`sb-background-active-${index}`}
        className="sb-background-active"
        variants={buttonVariants}
        initial={"hidden"}
        animate={
          index < slideIndex
            ? "fill"
            : index > slideIndex
            ? "hidden"
            : active
            ? "reset"
            : "show"
        }
        onClick={clickHandel}
        style={{
          backgroundColor: `${props?.background}` ?? "#313131",
        }}
      ></motion.div>

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
