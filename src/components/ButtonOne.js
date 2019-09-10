import React from "react";

const styles = {
  default: {
    backgroundColor: '#C5EFF7',
    color: '#24252a',
    padding: '1.5rem',
    borderRadius: '.5rem'
  }
}

const ButtonOne = () => {
  return (
    <button style={styles.default}> I am Button A!</button>
  )
}

export default ButtonOne;