import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
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
          {/* <AccordionItemState>
            {({ expanded }) => {
              expanded && activeIndexHandel(index);
            }}
          </AccordionItemState> */}

          <div className="ac-icon-section">
            <img className="ac-icon" src={props.icon} />
          </div>

          <div className="ac-heading-section">
            <h1 className="ac-heading">
              <span>{props.title}</span>
            </h1>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div className="ac-content-section">
          <p className="ac-content">
            <span>{props.content}</span>
          </p>
        </div>
      </AccordionItemPanel>
      {active && (
        <motion.div
          animate={animationAccordion}
          className="ac-progress-bar"
        ></motion.div>
      )}
    </AccordionItem>
  );
};

export default AccordionCard;
