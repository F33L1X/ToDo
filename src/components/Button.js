const Button = props => {

  const onButtonClick = () => {
    console.log("The Button was clicked")
  }

  return (
    <div className="input-button" onClick={onButtonClick}>
      {props.caption}
    </div>
  );
}

export default Button;