import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { accordionAnimation } from "./accordion.animation";

const AccordionCard = ({
  props,
  index,
  activeIndex,
  setActiveIndex,
  dataLength,
}) => {
  const active = index === activeIndex ? true : false;

  const { animationAccordion } = accordionAnimation({
    active,
  });

  useEffect(() => {
    if (index < dataLength - 1) {
      if (index === activeIndex) {
        setTimeout(() => {
          return setActiveIndex(activeIndex + 1);
        }, 5000);
      }
    } else {
      if (index === activeIndex) {
        setTimeout(() => {
          return setActiveIndex(0);
        }, 5000);
      }
    }
  }, [activeIndex]);

  const activeIndexHandel = (i) => {
    return setActiveIndex(i);
  };

  return (
    <AccordionItem
      key={`${props.id}`}
      className={`accordion-card ${active && "accordion-card-active"} 
      ${index + 1 === activeIndex && "accordion-card-border-disable"}`}
      uuid={`${props.id}`}
      dangerouslySetExpanded={activeIndex === index ? true : false}
      onClick={() => {
        activeIndexHandel(index);
      }}
    >
      <AccordionItemHeading>
        <AccordionItemButton>
          <div className="ac-icon-section">
            <img className="ac-icon" src={props.icon} />
          </div>

          <div className="ac-heading-section">
            <h1 className="ac-heading">
              <span>{props?.title}</span>
            </h1>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div className="ac-content-section">
          <p className="ac-content">
            <span>{props?.content}</span>
          </p>
        </div>
        <div className="ac-image-section">
          <Image
            className="ac-image"
            src={
              props?.image ??
              "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob3BwaW5nJTIwb25saW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            loading="eager"
            height={150}
            width={300}
            layout="fixed"
          />
        </div>
      </AccordionItemPanel>
      {active && (
        <motion.div
          animate={animationAccordion}
          className="ac-progress-bar"
          id={`${props?.id}-progress-bar`}
        ></motion.div>
      )}
    </AccordionItem>
  );
};

export default AccordionCard;
