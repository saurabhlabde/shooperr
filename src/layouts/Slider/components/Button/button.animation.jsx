import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

const buttonAnimation = ({ slideIndex }) => {
  const buttonVariants = {
    hidden: {
      width: `0%`,
    },
    show: {
      width: `100%`,
      transition: {
        duration: 5,
      },
    },
    fill: {
      width: `100%`,
      transition: {
        duration: 0.5,
      },
    },
    reset: {
      width: "0%",
      transition: {
        duration: 0.1,
      },
    },
  };

  return { buttonVariants };
};

export { buttonAnimation };
