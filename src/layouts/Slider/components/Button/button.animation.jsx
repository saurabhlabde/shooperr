import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const buttonAnimation = ({ slideIndex, index }) => {
  const animationButton = useAnimation();

  useEffect(() => {
    if (index < slideIndex) {
      animationButton.start({
        width: "100%",
        transition: {
          duration: 0.05,
        },
      });
    } else if (index < slideIndex) {
      animationButton.start({
        width: "100%",
        transition: {
          duration: 5,
        },
      });
    } else if (index > slideIndex) {
      animationButton.start({
        width: "0%",
        transition: {
          duration: 0.1,
        },
      });
    } else if (slideIndex === 0) {
      animationButton
        .start({
          width: "0%",
          transition: {
            duration: 0.5,
          },
        })
        .then(() => {
          animationButton.start({
            width: "100%",
            transition: {
              duration: 5,
            },
          });
        });
    } else {
      animationButton.start({
        width: "100%",
        transition: {
          duration: 5,
        },
      });
    }
  }, [slideIndex]);

  const restartAnimation = () => {
    animationButton
      .start({
        width: "0%",
        transition: {
          duration: 0.5,
        },
      })
      .then(() => {
        animationButton.start({
          width: "100%",
          transition: {
            duration: 5,
          },
        });
      });
  };

  return { animationButton, restartAnimation };
};

export { buttonAnimation };
