import { Section } from "../../layouts/Section/index";

import { ProductDetailsCard } from "../../layouts/ProductDetailsCard/index";

import { DetailsHook } from "./details.hook";

const DetailsScreen = () => {
  const { isLoading, productData } = DetailsHook();

  if (isLoading) return <h1>Loading...</h1>;

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
