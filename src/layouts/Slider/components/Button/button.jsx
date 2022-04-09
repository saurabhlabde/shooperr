const SliderButton = () => {
  return (
    <div className="slider-button-section">
      <div className="sb-background-active">{/* background */}</div>
      <div className="sb-section">
        <div className="sb-image-section">
          <img
            className="sb-image"
            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>

        <div className="sb-heading-section">
          <h1 className="sb-heading">
            <span>Sunglasses</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SliderButton;
