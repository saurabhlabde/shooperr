import Image from "next/image";

const SliderImage = ({ props }) => {
  return (
    <div className="slider-image-bg-section">
      <div className="slider-image-section">
        <img
          className="slider-image"
          src={
            props?.image ??
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          loading="eager"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default SliderImage;
