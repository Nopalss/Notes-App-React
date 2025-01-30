/* eslint-disable react/prop-types */
const FormInput = ({
  onChange = () => {},
  className,
  placeholder,
  name,
  id,
  maxlength = "100",
}) => {
  return (
    <input
      className={"input " + className}
      onChange={onChange}
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      maxLength={maxlength}
      required
    ></input>
  );
};

export default FormInput;
