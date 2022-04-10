import { useEffect, useState } from "react";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const AccordionCard = ({
  props,
  index,
  setActiveAccordion,
  activeAccordion,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      setActiveAccordion(index);
    }
  }, [active]);

  return (
    <AccordionItem
      key={`${props.id}`}
      className={`accordion-card ${active && "accordion-card-active"} 
      ${index + 1 === activeAccordion && "accordion-card-border-disable"}`}
    >
      <AccordionItemHeading>
        <AccordionItemButton>
          <AccordionItemState>
            {({ expanded }) => {
              expanded ? setActive(true) : setActive(false);
            }}
          </AccordionItemState>

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
    </AccordionItem>
  );
};

export default AccordionCard;
