import Image from "next/image";
import { useEffect, useState } from "react";
import { Accordion } from "react-accessible-accordion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { faqData } from "../../data/faqData";

import { AccordionCard } from "../../components/Accordion/index";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
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
            <Accordion allowZeroExpanded>
              {faqData?.map((item, index) => {
                return (
                  <AccordionCard
                    key={`${item.id}`}
                    props={item}
                    index={index}
                    activeAccordion={activeAccordion}
                    setActiveAccordion={setActiveAccordion}
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
              src={faqData[activeAccordion].image}
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
