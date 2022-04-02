import { Section } from "../../layouts/Section/index";
import { ProductDetailsCard } from "../../layouts/ProductDetailsCard/index";
import { Spinner } from "../../layouts/Spinner/index";

import { DetailsHook } from "./details.hook";

const DetailsScreen = () => {
  const { isLoading, productData } = DetailsHook();

  if (isLoading) return <Spinner />;

  return (
    <Section
      title={"Details"}
      component={
        <div className="d-card-section">
          <ProductDetailsCard props={productData} />
        </div>
      }
    />
  );
};

export default DetailsScreen;
