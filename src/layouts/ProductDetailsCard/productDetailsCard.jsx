import { useState } from "react";
import { useRouter } from "next/router";
import ReactStars from "react-rating-stars-component";
import { StarIcon, BackIcon } from "../../icons/index";

const ProductDetailsCard = () => {
  const [rating, setRating] = useState(0);

  const ratingChanged = () => {};

  const router = useRouter();

  const backHandel = () => {
    return router.back();
  };
  return (
    <div className="product-d-card">
      <div className="back-button" onClick={backHandel}>
        <BackIcon />
      </div>

      <div className="pdc-t-section">
        <div className="pdc-media-section">
          <img
            className="pdc-image"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          />
        </div>
      </div>

      <div className="pdc-b-section">
        <div className="pdc-product-name-section">
          <h1 className="pdc-product-name">
            <span>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</span>
          </h1>
        </div>

        <div className="pdc-price-rating-section">
          <div className="pdc-product-price-section">
            <h1 className="pdc-product-price">
              <span>$109.95</span>
            </h1>
          </div>

          <div className="pdc-rating-section">
            <div className="pdc-rating-icon">
              <StarIcon />
            </div>

            <div className="pdc-product-rating-section">
              <h1 className="pc-product-rating">
                <span>3.9 (120)</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="pdc-product-user-rating-section">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>

        <div className="pdc-product-description-section">
          <h1 className="pc-product-description">
            <span>
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </span>
          </h1>
        </div>

        <div className="pdc-product-category-section">
          <h1 className="pc-product-category">
            <span>men's clothing</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
