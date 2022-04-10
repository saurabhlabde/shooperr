import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const AccordionCard = ({ props }) => {
  return (
    <AccordionItem key={`${props.id}`} className="accordion-card">
      <AccordionItemHeading>
        <AccordionItemButton>
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
