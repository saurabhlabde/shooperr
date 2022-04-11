import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const accordionAnimation = ({ active }) => {
  const animationAccordion = useAnimation();

  useEffect(() => {
    animationAccordion
      .start({
        width: "100%",
        transition: {
          duration: 5,
          ease: "easeIn",
        },
      })
      .then(() => {
        animationAccordion.stop;
      });
  }, [active]);

  return { animationAccordion };
};

export { accordionAnimation };
