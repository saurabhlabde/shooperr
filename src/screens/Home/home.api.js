import axios from "axios";
import { useQuery } from "react-query";

const fetchProducts = async () => {
  let config = {
    method: "get",
    url: `https://fakestoreapi.com/products?limit=20`,
    headers: {},
  };

  const { data } = await axios(config);
  return data;
};

const useProducts = () => useQuery(["products"], fetchProducts);

export { useProducts };
