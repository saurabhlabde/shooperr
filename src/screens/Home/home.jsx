import { Section } from "../../layouts/Section/index";
import { ProductCard } from "../../layouts/ProductCard/index";
import { Spinner } from "../../layouts/Spinner/index";

import { HomeHook } from "./home.hook";
import { useEffect } from "react";

const HomeScreen = () => {
  const { isLoading, productsData } = HomeHook();

  if (isLoading) return <Spinner />;

  return (
    <Section
      title={"Home"}
      showSlider={true}
      component={
        <div className="cards-section">
          {productsData?.map((item, i) => {
            return <ProductCard key={`${i}-pc`} props={item} />;
          })}
        </div>
      }
    />
  );
};

export default HomeScreen;
