import Image from "next/image";
import { useEffect, useState } from "react";
import { Accordion } from "react-accessible-accordion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { faqData } from "../../data/faqData";

import { AccordionCard } from "../../components/Accordion/index";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const animation = useAnimation();

  const { ref, inView } = useInView();

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
    <div className="faq-container" ref={ref}>
      <motion.div className="faq-section" animate={animation}>
        <div className="faq-l-section">
          <div className="faq-heading-section">
            <h1 className="faq-heading">
              <span>FAQ</span>
            </h1>
          </div>

          <div className="faq-accordion-section">
            <Accordion allowZeroExpanded preExpanded={["faq-item-1"]}>
              {faqData?.map((item, index) => {
                return (
                  <AccordionCard
                    key={`${item.id}`}
                    props={item}
                    index={index}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    dataLength={faqData?.length}
                    inView={inView}
                  />
                );
              })}
            </Accordion>
          </div>
        </div>

        <div className="faq-r-section">
          <div className="faq-a-image-section">
            <Image
              className="faq-a-image"
              src={
                faqData[activeIndex]?.image ??
                "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob3BwaW5nJTIwb25saW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
              loading="eager"
              height={700}
              width={500}
              layout="fixed"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Faq;
