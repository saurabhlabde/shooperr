import axios from "axios";
import { useQuery } from "react-query";

const fetchProduct = async ({ queryKey }) => {
  const [_key, key] = queryKey;

  let config = {
    method: "get",
    url: `https://fakestoreapi.com/products/${key?.key}`,
    headers: {},
  };

  const { data } = await axios(config);
  return data;
};

const useProduct = (key) => useQuery(["product", key], fetchProduct);

export { useProduct };
