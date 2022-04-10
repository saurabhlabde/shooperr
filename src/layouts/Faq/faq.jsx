import Image from "next/image";
import { Accordion } from "react-accessible-accordion";

import { faqData } from "../../data/faqData";

import { AccordionCard } from "../../components/Accordion/index";

const Faq = () => {
  return (
    <div className="faq-section">
      <div className="faq-l-section">
        <div className="faq-heading-section">
          <h1>
            <span>FAQ</span>
          </h1>
        </div>

        <div className="faq-accordion-section">
          <Accordion allowZeroExpanded>
            {faqData?.map((item) => {
              return <AccordionCard key={`${item.id}`} props={item} />;
            })}
          </Accordion>
        </div>
      </div>

      <div className="faq-r-section">
        <div className="faq-a-image-section">{/* <Image /> */}</div>
      </div>
    </div>
  );
};

export default Faq;
