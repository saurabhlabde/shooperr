const Button = ({ label, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      <label className="button-label">
        <h1 className="button-text">
          <span>{label}</span>
        </h1>
      </label>
    </div>
  );
};

export default Button;
