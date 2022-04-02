import { useEffect, useState } from "react";

import { useProducts } from "./home.api";

const HomeHook = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { data, error, isLoading: products_loading } = useProducts();

  useEffect(() => {
    const loading = products_loading;

    setIsLoading(loading);
  }, [products_loading]);

  useEffect(() => {
    if (data) {
      setProductsData(data);
    }
  }, [data]);

  return { isLoading, productsData };
};

export { HomeHook };
