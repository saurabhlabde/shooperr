import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "../../components/Button/index";

const ProductCard = ({ props }) => {
  const router = useRouter();

  const redirectHandel = () => {
    return props?.id && router.push(`/${props?.id}`);
  };

  return (
    <motion.div className="product-card">
      <div className="pc-t-section">
        <div className="pc-media-section">
          <Image
            className="pc-image"
            src={`${props?.image}`}
            alt={`${props?.title}`}
            height={315}
            width={250}
            loading="lazy"
          />
        </div>
      </div>

      <div className="pc-b-section">
        <div className="pc-product-name-section">
          <h1 className="pc-product-name">
            <span>{props?.title}</span>
          </h1>
        </div>
        <div className="pc-product-price-section">
          <h1 className="pc-product-price">
            <span>₹ {props?.price * 76}</span>
          </h1>
        </div>

        <div className="pc-product-button-section">
          <Button label={"MORE DETAILS"} onClick={redirectHandel} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
