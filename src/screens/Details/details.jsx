import { Section } from "../../layouts/index";

import { ProductDetailsCard } from "../../layouts/ProductDetailsCard/index";

const DetailsScreen = () => {
  return (
    <Section
      title={"Details"}
      component={
        <div className="d-card-section">
          <ProductDetailsCard />
        </div>
      }
    />
  );
};

export default DetailsScreen;
