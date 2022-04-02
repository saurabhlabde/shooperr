import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useProduct } from "./details.api";

const DetailsHook = () => {
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter({});

  const {
    data,
    error,
    isLoading: product_loading,
  } = useProduct({ key: +router?.query?.id });

  useEffect(() => {
    const loading = product_loading;

    setIsLoading(loading);
  }, [product_loading]);

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong!");
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setProductData(data);
    }
  }, [data]);

  return { isLoading, productData };
};

export { DetailsHook };
