import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";

import { BackIcon } from "../../icons/BackIcon/index";
import { StarIcon } from "../../icons/StarIcon/index";

import { setRating } from "../../state/rating";

const ProductDetailsCard = ({ props }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const default_rating = useSelector((state) => state.rating.value);

  const ratingChanged = () => {
    if (default_rating <= 0) {
      return dispatch(setRating(1));
    }
  };

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
          <Image
            className="pdc-image"
            src={`${props?.image}`}
            alt={`${props?.title}`}
            height={315}
            width={250}
            loading="eager"
          />
        </div>
      </div>

      <div className="pdc-b-section">
        <div className="pdc-product-name-section">
          <h1 className="pdc-product-name">
            <span>{props?.title}</span>
          </h1>
        </div>

        <div className="pdc-price-rating-section">
          <div className="pdc-product-price-section">
            <h1 className="pdc-product-price">
              <span>₹ {props?.price * 76}</span>
            </h1>
          </div>

          <div className="pdc-rating-section">
            <div className="pdc-rating-icon">
              <StarIcon />
            </div>

            <div className="pdc-product-rating-section">
              <h1 className="pc-product-rating">
                <span>
                  {Math.floor(props?.rating?.rate + Math.random())} (
                  {props?.rating?.count + default_rating})
                </span>
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
            <span>{props?.description}</span>
          </h1>
        </div>

        <div className="pdc-product-category-section">
          <h1 className="pc-product-category">
            <span>{props?.category}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
