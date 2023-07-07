const Button = ({ className, text, onClick }) => {
  return (
    <button class={`Button-${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
