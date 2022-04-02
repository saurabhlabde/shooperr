import { useRouter } from "next/router";
import { Button } from "../../components/index";

const ProductCard = () => {
  const router = useRouter();

  const redirectHandel = () => {
    return router.push("/1");
  };

  return (
    <div className="product-card">
      <div className="pc-t-section">
        <div className="pc-media-section">
          <img
            className="pc-image"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          />
        </div>
      </div>

      <div className="pc-b-section">
        <div className="pc-product-name-section">
          <h1 className="pc-product-name">
            <span>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</span>
          </h1>
        </div>
        <div className="pc-product-price-section">
          <h1 className="pc-product-price">
            <span>$109.95</span>
          </h1>
        </div>

        <div className="pc-product-button-section">
          <Button label={"MORE DETAILS"} onClick={redirectHandel} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
