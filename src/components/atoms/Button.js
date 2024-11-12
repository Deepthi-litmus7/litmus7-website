const Button = ({ text, className, image }) => {
  return (
    <div>
      <button className={className}>
        {image}
        {text}
      </button>
    </div>
  );
};
export default Button;
