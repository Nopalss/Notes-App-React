const Button = ({ children, onClick = () => {}, className, id }) => {
  return (
    <button className={className} onClick={() => onClick(id)}>
      {children}
    </button>
  );
};

export default Button;
