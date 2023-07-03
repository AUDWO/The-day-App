const Button = ({ text, onClick }) => {
  return (
    <button class={[""]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
