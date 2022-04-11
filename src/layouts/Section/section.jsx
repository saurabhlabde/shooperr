import Head from "next/head";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Navbar } from "../Navbar/index";
import { Footer } from "../Footer/index";
import { Faq } from "../Faq/index";
import { ImageSlider } from "../Slider/index";

import { Alert } from "../../components/Alert/index";

const Section = ({ title, component, showSlider, showFaq }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const animation = useAnimation();

  const { ref, inView } = useInView();

  const { ref: refSlider, inView: inViewSlider } = useInView();

  useEffect(() => {
    function updatePosition() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.1,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <div className="container">
      <Head>
        <title>{title ? `${title} | Shooperr` : "Shooperr"} </title>
        <meta name="description" content="Shooperr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div>
          <Navbar />
        </div>

        {showSlider && (
          <div className="h-image-slider-section" ref={refSlider}>
            <ImageSlider
              scrollPosition={scrollPosition}
              inView={inViewSlider}
            />
          </div>
        )}

        <div ref={ref}>
          <motion.div animate={animation} className="h-cards-section">
            {component}
          </motion.div>
        </div>

        {showFaq && <Faq />}

        <Footer />

        <Alert />
      </main>
    </div>
  );
};

export default Section;
