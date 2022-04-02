import { Section } from "../../layouts/index";

import { ProductCard } from "../../layouts/ProductCard/index";

const HomeScreen = () => {
  return (
    <Section
      title={"Home"}
      component={
        <div className="cards-section">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      }
    />
  );
};

export default HomeScreen;
