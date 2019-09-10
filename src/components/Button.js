import React from "react";
import stylesWrapper from '../HOC/stylesWrapper';

const Button = (props) => {

  return (
    <button style={props.styles}>I'm the Button</button>
  )
}

export default stylesWrapper(Button);